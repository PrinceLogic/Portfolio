from pydantic import BaseModel, Field, EmailStr
from datetime import datetime
from typing import Optional
import uuid


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=1, max_length=200)
    message: str = Field(..., min_length=1, max_length=2000)


class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: str
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    status: str = Field(default="unread")

    class Config:
        json_schema_extra = {
            "example": {
                "id": "123e4567-e89b-12d3-a456-426614174000",
                "name": "John Doe",
                "email": "john@example.com",
                "subject": "Project Inquiry",
                "message": "I'd like to discuss a project with you.",
                "timestamp": "2024-01-01T00:00:00",
                "status": "unread"
            }
        }
