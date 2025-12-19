from fastapi import APIRouter, HTTPException, status
from models.contact import Contact, ContactCreate
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/contact", tags=["contact"])

# MongoDB connection will be injected from main app
db = None


def set_database(database):
    global db
    db = database


@router.post("", status_code=status.HTTP_201_CREATED)
async def create_contact_message(contact_data: ContactCreate):
    """
    Submit a contact form message.
    Stores the message in MongoDB and returns success response.
    """
    try:
        # Create contact object
        contact = Contact(**contact_data.dict())
        
        # Convert to dict for MongoDB
        contact_dict = contact.dict()
        
        # Insert into MongoDB
        result = await db.contacts.insert_one(contact_dict)
        
        if result.inserted_id:
            logger.info(f"Contact message created: {contact.id} from {contact.email}")
            
            # Convert datetime to string for JSON serialization
            response_data = contact_dict.copy()
            response_data["timestamp"] = contact_dict["timestamp"].isoformat()
            
            return {
                "success": True,
                "message": "Thank you for reaching out! I will get back to you soon.",
                "data": response_data
            }
        else:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to save contact message"
            )
            
    except Exception as e:
        logger.error(f"Error creating contact message: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred while processing your message: {str(e)}"
        )


@router.get("", response_model=list)
async def get_contact_messages(status_filter: str = None, limit: int = 100):
    """
    Get all contact messages (for admin use).
    Optional status filter: 'read' or 'unread'
    """
    try:
        query = {}
        if status_filter:
            query["status"] = status_filter
            
        contacts = await db.contacts.find(query, {"_id": 0}).sort("timestamp", -1).limit(limit).to_list(limit)
        
        logger.info(f"Retrieved {len(contacts)} contact messages")
        return contacts
        
    except Exception as e:
        logger.error(f"Error retrieving contact messages: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to retrieve contact messages"
        )


@router.patch("/{contact_id}/status", response_model=dict)
async def update_contact_status(contact_id: str, new_status: str):
    """
    Update the status of a contact message.
    Status can be 'read' or 'unread'
    """
    try:
        if new_status not in ["read", "unread"]:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Status must be 'read' or 'unread'"
            )
        
        result = await db.contacts.update_one(
            {"id": contact_id},
            {"$set": {"status": new_status}}
        )
        
        if result.modified_count > 0:
            logger.info(f"Contact {contact_id} status updated to {new_status}")
            return {
                "success": True,
                "message": f"Contact status updated to {new_status}"
            }
        else:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Contact message not found"
            )
            
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating contact status: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to update contact status"
        )
