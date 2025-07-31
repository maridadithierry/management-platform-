const express = require('express');
const router = express.Router();
const { Facilitator } = require('../models');

router.get('/', async (req, res) => {
  try {
    const facilitators = await Facilitator.findAll();
    res.json(facilitators);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching facilitators' });
  }
});

module.exports = router;
