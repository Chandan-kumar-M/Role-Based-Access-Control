# Role-Based-Access-Control
Role-Based Access Control (RBAC) Backend This project implements a Role-Based Access Control (RBAC) system using Node.js, Express, and JWT authentication. 
It provides a secure backend that restricts access to routes based on user roles:

Admin: Can access all routes (admin, moderator, and user).
Moderator: Can access moderator and user routes.
User: Can access only user routes.

Features

JWT-based Authentication and Authorization.
Role-specific access to routes.
Modular architecture with separate middleware for authentication and role-based authorization.
Scalable for adding more roles or permissions in the future.

Installation
Clone the repository:
  git clone https://github.com/yourusername/rbac.git
  cd rbac

Install dependencies:
  npm install
  
Set up environment variables:
  Create a .env file in the root directory.
  Add the following variables (replace placeholders with actual values):
  MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
  JWT_SECRET=your-jwt-secret
  PORT=5000
  
Run the application:
  npm start

Usage
  Admin Routes: Accessible by users with the admin role.
  Moderator Routes: Accessible by admin and moderator roles.
  User Routes: Accessible by admin, moderator, and user roles.

 
