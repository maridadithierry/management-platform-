// middlewares/auth.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'No token provided' });

  jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' });
    req.user = decoded;
    next();
  });
};

exports.isFacilitator = (req, res, next) => {
  if (req.user.role !== 'facilitator') return res.status(403).json({ message: 'Access denied' });
  next();
};

exports.isManager = (req, res, next) => {
  if (req.user.role !== 'manager') return res.status(403).json({ message: 'Access denied' });
  next();
};
