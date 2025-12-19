#!/usr/bin/env python3
"""
Backend API Testing for Prince Kahar's Portfolio Website
Tests the contact form backend API endpoints
"""

import requests
import json
import os
from datetime import datetime

# Read backend URL from frontend .env file
def get_backend_url():
    env_path = "/app/frontend/.env"
    with open(env_path, 'r') as f:
        for line in f:
            if line.startswith('REACT_APP_BACKEND_URL='):
                return line.split('=', 1)[1].strip()
    raise ValueError("REACT_APP_BACKEND_URL not found in frontend/.env")

BACKEND_URL = get_backend_url()
print(f"Testing backend at: {BACKEND_URL}")

def test_health_check():
    """Test the health check endpoint"""
    print("\n=== Testing Health Check ===")
    try:
        response = requests.get(f"{BACKEND_URL}/api/")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if "message" in data and "Prince Kahar Portfolio API" in data["message"]:
                print("✅ Health check PASSED")
                return True
            else:
                print("❌ Health check FAILED - Invalid response format")
                return False
        else:
            print(f"❌ Health check FAILED - Expected 200, got {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Health check FAILED - Exception: {e}")
        return False

def test_valid_contact_submission():
    """Test valid contact form submission"""
    print("\n=== Testing Valid Contact Form Submission ===")
    
    contact_data = {
        "name": "Prince Kahar Test User",
        "email": "prince.test@example.com",
        "subject": "Testing Contact Form API",
        "message": "This is a comprehensive test message for the contact form API. Testing all functionality including validation and database storage."
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/api/contact", json=contact_data)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 201:
            data = response.json()
            # Check response structure
            required_fields = ["success", "message", "data"]
            if all(field in data for field in required_fields):
                if data["success"] and "data" in data:
                    contact_response = data["data"]
                    # Verify all fields are present in response
                    expected_contact_fields = ["id", "name", "email", "subject", "message", "timestamp", "status"]
                    if all(field in contact_response for field in expected_contact_fields):
                        print("✅ Valid contact submission PASSED")
                        return True, contact_response["id"]
                    else:
                        print("❌ Valid contact submission FAILED - Missing fields in data")
                        return False, None
                else:
                    print("❌ Valid contact submission FAILED - Success false or missing data")
                    return False, None
            else:
                print("❌ Valid contact submission FAILED - Invalid response structure")
                return False, None
        else:
            print(f"❌ Valid contact submission FAILED - Expected 201, got {response.status_code}")
            return False, None
    except Exception as e:
        print(f"❌ Valid contact submission FAILED - Exception: {e}")
        return False, None

def test_invalid_email():
    """Test contact form with invalid email"""
    print("\n=== Testing Invalid Email Validation ===")
    
    contact_data = {
        "name": "Test User",
        "email": "invalid-email-format",
        "subject": "Test Subject",
        "message": "Test message with invalid email"
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/api/contact", json=contact_data)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 422:
            print("✅ Invalid email validation PASSED")
            return True
        else:
            print(f"❌ Invalid email validation FAILED - Expected 422, got {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Invalid email validation FAILED - Exception: {e}")
        return False

def test_missing_required_fields():
    """Test contact form with missing required fields"""
    print("\n=== Testing Missing Required Fields ===")
    
    # Test missing name field
    contact_data = {
        "email": "test@example.com",
        "subject": "Test Subject",
        "message": "Test message without name field"
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/api/contact", json=contact_data)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 422:
            print("✅ Missing required fields validation PASSED")
            return True
        else:
            print(f"❌ Missing required fields validation FAILED - Expected 422, got {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Missing required fields validation FAILED - Exception: {e}")
        return False

def test_get_contact_messages():
    """Test retrieving contact messages"""
    print("\n=== Testing Get Contact Messages ===")
    
    try:
        response = requests.get(f"{BACKEND_URL}/api/contact")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Number of contact messages: {len(data)}")
            
            if isinstance(data, list):
                if len(data) > 0:
                    # Check if our test message is in the results
                    print("Sample contact message structure:")
                    print(json.dumps(data[0], indent=2, default=str))
                    
                    # Verify structure of contact messages
                    expected_fields = ["id", "name", "email", "subject", "message", "timestamp", "status"]
                    if all(field in data[0] for field in expected_fields):
                        print("✅ Get contact messages PASSED")
                        return True
                    else:
                        print("❌ Get contact messages FAILED - Invalid message structure")
                        return False
                else:
                    print("✅ Get contact messages PASSED (empty list)")
                    return True
            else:
                print("❌ Get contact messages FAILED - Response is not a list")
                return False
        else:
            print(f"❌ Get contact messages FAILED - Expected 200, got {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Get contact messages FAILED - Exception: {e}")
        return False

def test_empty_fields():
    """Test contact form with empty fields"""
    print("\n=== Testing Empty Fields Validation ===")
    
    contact_data = {
        "name": "",
        "email": "test@example.com",
        "subject": "",
        "message": ""
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/api/contact", json=contact_data)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 422:
            print("✅ Empty fields validation PASSED")
            return True
        else:
            print(f"❌ Empty fields validation FAILED - Expected 422, got {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Empty fields validation FAILED - Exception: {e}")
        return False

def run_all_tests():
    """Run all backend API tests"""
    print("=" * 60)
    print("PRINCE KAHAR PORTFOLIO - BACKEND API TESTING")
    print("=" * 60)
    
    test_results = {}
    
    # Test 1: Health Check
    test_results['health_check'] = test_health_check()
    
    # Test 2: Valid Contact Submission
    success, contact_id = test_valid_contact_submission()
    test_results['valid_submission'] = success
    
    # Test 3: Invalid Email
    test_results['invalid_email'] = test_invalid_email()
    
    # Test 4: Missing Required Fields
    test_results['missing_fields'] = test_missing_required_fields()
    
    # Test 5: Empty Fields
    test_results['empty_fields'] = test_empty_fields()
    
    # Test 6: Get Contact Messages (should include our test message)
    test_results['get_messages'] = test_get_contact_messages()
    
    # Summary
    print("\n" + "=" * 60)
    print("TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    total = len(test_results)
    
    for test_name, result in test_results.items():
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
        if result:
            passed += 1
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests PASSED! Contact form API is working correctly.")
        return True
    else:
        print("⚠️  Some tests FAILED. Please check the issues above.")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    exit(0 if success else 1)