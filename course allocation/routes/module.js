// routes/module.js
const express = require('express');
const router = express.Router();
const { Module } = require('../models');

// GET /modules
router.get('/', async (req, res) => {
  try {
    const modules = await Module.findAll();
    res.json(modules);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch modules' });
  }
});

module.exports = router;