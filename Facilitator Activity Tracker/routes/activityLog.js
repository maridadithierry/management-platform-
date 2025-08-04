const express = require('express');
const router = express.Router();
const activityLogController = require('../controllers/activityLogController');

router.get('/', activityLogController.getAllLogs); // GET /activitylogs/

module.exports = router;
