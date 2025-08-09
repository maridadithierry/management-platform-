Course-Management-Platform

A full-stack platform designed to manage course offerings and track facilitator activity logs. Includes Redis-backed notifications, RESTful APIs, authentication with role-based access, and background workers for alerting.
Table of Contents

-Features

    Prerequisites

    Installation

    Environment Setup

    Database Schema

    Authentication

    Running the App

    Redis & Worker Setup

    API Testing

    Project Structure

    Use Cases

    Troubleshooting

    Limitations

    License

    Author

Features

-Facilitator activity tracking (attendance, grading, moderation, etc.)

-Course offering management

-JWT-based authentication and role authorization

-Redis-backed notification queue (reminders and alerts)

-Background worker system

-RESTful API with Swagger documentation

-Sequelize ORM for MySQL database

-Email simulation for notification delivery
Prerequisites

-Node.js

-MySQL

-Redis

-npm

-Git (optional)
Installation

git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install

Environment Setup

Create a .env file and configure your environment:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=activitylogs
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
JWT_SECRET=your_jwt_secret

Database Schema

Key tables:

-Users: Facilitators and managers

-Roles: User roles

-CourseOfferings: Course instances

-ActivityLogs: Weekly submissions

-Notifications: Sent messages

-SequelizeMeta: Migration tracking

-Use Sequelize migrations to create tables:

-npx sequelize-cli db:migrate
Authentication

-JWT tokens used to protect routes

-Roles checked with middleware (authorizeRole)

-Login returns a JWT to be used in headers

Login Sample:

POST /auth/login
{
  "email": "manager@example.com",
  Running the App

Start the API server

npm start

or

node server.js

Start the notification worker

node workers/notificationWorker.js

API Testing

Use Postman or Swagger UI to test endpoints. Example: Create Activity Log

POST /api/activitytracker
Authorization: Bearer <token>

{
  "allocationId": "uuid",
  "weekNumber": 5,
  "attendance": [true, false, true],
  "formativeOneGrading": "Pending",
  "courseModeration": "Done"
}

Full list of endpoints at:

 http://localhost:5000/api-docs

