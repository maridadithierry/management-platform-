// routes/cohort.js
const express = require('express');
const router = express.Router();
const { Cohort } = require('../models');

// GET /cohorts
router.get('/', async (req, res) => {
  try {
    const cohorts = await Cohort.findAll();
    res.json(cohorts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cohorts' });
  }
});

module.exports = router;
