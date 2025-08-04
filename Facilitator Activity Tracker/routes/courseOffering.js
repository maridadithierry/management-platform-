const express = require('express');
const router = express.Router();
const { CourseOffering } = require('../models');

// GET all course offerings
router.get('/', async (req, res) => {
  try {
    const offerings = await CourseOffering.findAll();
    res.json(offerings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch course offerings' });
  }
});

module.exports = router;
