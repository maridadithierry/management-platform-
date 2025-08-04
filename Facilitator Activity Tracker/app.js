// app.js
const express = require('express');
const app = express();
const activityRoutes = require('./routes/activityLog');
const { verifyToken } = require('./middlewares/auth');
require('dotenv').config();

// Middleware
app.use(express.json());

// Routes (protect all activity log routes)
app.use('/api/activity-logs', verifyToken, activityRoutes);

const activityLogRoutes = require('./routes/activityLog');
app.use('/activitylogs', activityLogRoutes);

const courseOfferingRoutes = require('./routes/courseOffering');
app.use('/courseofferings', courseOfferingRoutes);

const userRoutes = require('./routes/user');
app.use('/users', userRoutes);





// Default route
app.get('/', (req, res) => {
  res.send('Facilitator Activity Tracker API is running.');
});

module.exports = app;
