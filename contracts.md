# Backend Integration Contracts

## Overview
This document outlines the integration plan between the frontend and backend for Prince Kahar's portfolio website.

## Current Status
✅ **Frontend Completed** - All sections implemented with mock data
- Hero, About, Skills, Projects, Education, Contact, Footer
- Particle background animations
- Smooth scroll animations
- Responsive design

## Backend Requirements

### 1. Contact Form API

**Mocked Data Location:** `/app/frontend/src/utils/mock.js` - `mockContactSubmit()`

**API Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "subject": "string (required)",
  "message": "string (required)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for reaching out! I will get back to you soon.",
  "data": {
    "id": "string",
    "name": "string",
    "email": "string",
    "subject": "string",
    "message": "string",
    "timestamp": "ISO 8601 date string",
    "status": "unread"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message"
}
```

### 2. Database Schema

**Collection: `contacts`**
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required),
  subject: String (required),
  message: String (required),
  timestamp: Date (default: now),
  status: String (default: "unread", enum: ["unread", "read"])
}
```

### 3. Backend Implementation Tasks

1. **Create Contact Model** (`/app/backend/models/contact.py`)
   - Define Pydantic model for validation
   - Include all required fields with proper types

2. **Create Contact Route** (`/app/backend/routes/contact.py`)
   - POST endpoint to handle form submissions
   - Validate incoming data
   - Store in MongoDB
   - Return success/error response

3. **Update Main Server** (`/app/backend/server.py`)
   - Import and register contact routes
   - Ensure CORS is configured

### 4. Frontend Integration Tasks

**File to Update:** `/app/frontend/src/components/Contact.jsx`

**Changes Required:**
- Replace mock API call with actual backend API
- Update import: Remove `mockContactSubmit` from mock.js
- Add axios call to `${BACKEND_URL}/api/contact`
- Keep existing error handling and toast notifications

**Before:**
```javascript
import { mockContactSubmit } from '../utils/mock';
const result = await mockContactSubmit(formData);
```

**After:**
```javascript
import axios from 'axios';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
const result = response.data;
```

## Integration Checklist

- [ ] Create Contact model in backend
- [ ] Create Contact API endpoint
- [ ] Test API with curl/Postman
- [ ] Update Contact.jsx to use real API
- [ ] Remove mock function from mock.js
- [ ] Test form submission end-to-end
- [ ] Verify data is stored in MongoDB

## Notes

- Frontend is fully functional with animations and mock data
- Backend only needs contact form API (user confirmed)
- No authentication required
- No admin panel needed
- Resume download uses static file (no backend needed)
- All other data (projects, skills, education) remains static on frontend
