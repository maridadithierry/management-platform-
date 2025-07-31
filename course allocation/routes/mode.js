// routes/mode.js
const express = require('express');
const router = express.Router();
const { Mode } = require('../models');

// GET /modes
router.get('/', async (req, res) => {
  try {
    const modes = await Mode.findAll();
    res.json(modes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch modes' });
  }
});

module.exports = router;
