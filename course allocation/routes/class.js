// routes/class.js
const express = require('express');
const router = express.Router();
const { Class } = require('../models');

// GET /classes
router.get('/', async (req, res) => {
  try {
    const classes = await Class.findAll();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch classes' });
  }
});

module.exports = router;
