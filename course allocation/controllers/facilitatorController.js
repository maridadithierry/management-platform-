const { Facilitator } = require('../models');

// Get all facilitators
exports.getAll = async (req, res) => {
  const facilitators = await Facilitator.findAll();
  res.json(facilitators);
};

// Get a single facilitator by ID
exports.getById = async (req, res) => {
  const facilitator = await Facilitator.findByPk(req.params.id);
  if (!facilitator) return res.status(404).json({ message: 'Not found' });
  res.json(facilitator);
};

// Create a facilitator
exports.create = async (req, res) => {
  try {
    const facilitator = await Facilitator.create(req.body);
    res.status(201).json(facilitator);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a facilitator
exports.update = async (req, res) => {
  const facilitator = await Facilitator.findByPk(req.params.id);
  if (!facilitator) return res.status(404).json({ message: 'Not found' });

  await facilitator.update(req.body);
  res.json(facilitator);
};

// Delete a facilitator
exports.remove = async (req, res) => {
  const facilitator = await Facilitator.findByPk(req.params.id);
  if (!facilitator) return res.status(404).json({ message: 'Not found' });

  await facilitator.destroy();
  res.json({ message: 'Deleted successfully' });
};
