// controllers/courseOfferingController.js
const { CourseOffering, Module, Cohort, Class, Mode, User } = require('../models');

exports.createOffering = async (req, res) => {
  try {
    const offering = await CourseOffering.create(req.body);
    res.status(201).json(offering);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOfferings = async (req, res) => {
  try {
    const offerings = await CourseOffering.findAll({
      include: [Module, Cohort, Class, Mode, { model: User, as: 'facilitator' }]
    });
    res.json(offerings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOffering = async (req, res) => {
  try {
    const { id } = req.params;
    await CourseOffering.update(req.body, { where: { id } });
    res.json({ message: 'Updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteOffering = async (req, res) => {
  try {
    const { id } = req.params;
    await CourseOffering.destroy({ where: { id } });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFacilitatorCourses = async (req, res) => {
  try {
    const facilitatorId = req.user.id;
    const offerings = await CourseOffering.findAll({
      where: { facilitatorId },
      include: [Module, Cohort, Class, Mode]
    });
    res.json(offerings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
