// routes/student.js
const express = require('express');
const router = express.Router();
const { Student, Cohort } = require('../models');

// GET /students - List all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll({ include: ['cohort'] });
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

// GET /students/:id - Get a single student
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id, { include: ['cohort'] });
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch student' });
  }
});

// POST /students - Create a new student
router.post('/', async (req, res) => {
  try {
    const { name, email, cohortId } = req.body;
    const newStudent = await Student.create({ name, email, cohortId });
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create student' });
  }
});

// PUT /students/:id - Update a student
router.put('/:id', async (req, res) => {
  try {
    const { name, email, cohortId } = req.body;
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ error: 'Student not found' });

    student.name = name || student.name;
    student.email = email || student.email;
    student.cohortId = cohortId || student.cohortId;

    await student.save();
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update student' });
  }
});

// DELETE /students/:id - Delete a student
router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ error: 'Student not found' });

    await student.destroy();
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete student' });
  }
});

module.exports = router;
