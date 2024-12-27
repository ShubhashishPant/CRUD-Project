# User Management System

A web application for user registration, login, and viewing registered users using Node.js, Express, MongoDB, jQuery, HTML, CSS, and Bootstrap.

## Installation

### Prerequisites

- Node.js
- npm
- MongoDB

### Backend Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd your-project/backend

2. Install backend dependencies:
    ```bash
   npm install

3. Create a .env file in the backend directory and add the following environment variables:
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret

4. Start the backend server
    ```bash
    npm start

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
   cd ../frontend

2. Install frontend dependencies:
    ```bash
    npm install

3. Start the frontend server
    ```bash
    npm start

### Usage 
## User Registration
 
 1. Open the application in your web browser.
 2. Fill out the registration form with a username, email, and password.
 3. Click the "Register" button to create a new user account.
 
## View Users
 
 1. After logging in, you will be able to see the list of registered users.
 2. Click on any row in the users table to view the details of that user in a modal popup.
