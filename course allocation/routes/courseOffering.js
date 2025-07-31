// routes/courseOffering.js
const express = require('express');
const router = express.Router();
const { createOffering, getOfferings, updateOffering, deleteOffering } = require('../controllers/courseOfferingController');
const { authenticateManager } = require('../middleware/auth');
// routes/courseOffering.js
const { getFacilitatorCourses } = require('../controllers/courseOfferingController');
const { authenticateFacilitator } = require('../middleware/auth');

router.get('/my-courses', authenticateFacilitator, getFacilitatorCourses);

// Manager routes
router.post('/', authenticateManager, createOffering);
router.get('/', authenticateManager, getOfferings);
router.put('/:id', authenticateManager, updateOffering);
router.delete('/:id', authenticateManager, deleteOffering);

module.exports = router;
