const { ActivityLog } = require('../models');

exports.getAllLogs = async (req, res) => {
  try {
    const logs = await ActivityLog.findAll();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching logs', error });
  }
};
