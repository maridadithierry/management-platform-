// routes/user.js
const express = require('express');
const router = express.Router();
const { User } = require('../models');

// GET /users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router;
