// middleware/auth.js
exports.authenticateManager = (req, res, next) => {
  if (req.user && req.user.role === 'manager') return next();
  return res.status(403).json({ error: 'Access denied' });
};

exports.authenticateFacilitator = (req, res, next) => {
  if (req.user && req.user.role === 'facilitator') return next();
  return res.status(403).json({ error: 'Access denied' });
};
