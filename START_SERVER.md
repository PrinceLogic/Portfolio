# How to Start the Server

This guide explains how to start both the backend and frontend servers for the Portfolio project.

## Prerequisites

1. **Python 3.8+** installed
2. **Node.js and npm** installed
3. **MongoDB** database (local or remote)

## Backend Server Setup

### 1. Navigate to the backend directory
```bash
cd app/backend
```

### 2. Create a virtual environment (recommended)
```bash
# Windows PowerShell
python -m venv venv
.\venv\Scripts\Activate.ps1

# Windows CMD
python -m venv venv
venv\Scripts\activate.bat

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Create a `.env` file
Create a `.env` file in the `app/backend` directory with the following content:
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio_db
```

**Note:** Update `MONGO_URL` if you're using a remote MongoDB instance (e.g., MongoDB Atlas).

### 5. Start the backend server
```bash
# Using uvicorn directly
uvicorn server:app --host 0.0.0.0 --port 8001 --reload

# Or using Python module syntax
python -m uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

The backend server will start on **http://localhost:8001**

- API Documentation: http://localhost:8001/docs
- API Root: http://localhost:8001/api/

## Frontend Server Setup

### 1. Navigate to the frontend directory
```bash
cd app/frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the frontend development server
```bash
npm start
```

The frontend server will start on **http://localhost:3000**

The browser should automatically open. If not, navigate to http://localhost:3000 manually.

## Running Both Servers

You'll need **two terminal windows**:

**Terminal 1 - Backend:**
```bash
cd app/backend
# Activate virtual environment if using one
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

**Terminal 2 - Frontend:**
```bash
cd app/frontend
npm start
```

## Quick Start Commands Summary

### Backend:
```bash
cd app/backend
python -m venv venv
.\venv\Scripts\Activate.ps1  # Windows PowerShell
pip install -r requirements.txt
# Create .env file with MONGO_URL and DB_NAME
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

### Frontend:
```bash
cd app/frontend
npm install
npm start
```

## Troubleshooting

1. **Backend won't start:**
   - Ensure MongoDB is running and accessible
   - Check that `.env` file exists with correct `MONGO_URL` and `DB_NAME`
   - Verify all Python dependencies are installed

2. **Frontend won't start:**
   - Delete `node_modules` and `package-lock.json`, then run `npm install` again
   - Check that Node.js version is compatible (Node 14+ recommended)

3. **Port already in use:**
   - Backend: Change port with `--port 8002` (or any available port)
   - Frontend: The terminal will prompt you to use a different port

4. **Import errors:**
   - Ensure you're running commands from the correct directory
   - For backend, make sure you're in `app/backend` directory
   - For frontend, make sure you're in `app/frontend` directory

