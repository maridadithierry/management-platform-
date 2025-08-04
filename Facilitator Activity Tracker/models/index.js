const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./User')(sequelize, DataTypes);
db.CourseOffering = require('./CourseOffering')(sequelize, DataTypes);
db.ActivityLog = require('./ActivityLog')(sequelize, DataTypes);

// Associations
db.CourseOffering.hasMany(db.ActivityLog, { foreignKey: 'allocationId' });
db.ActivityLog.belongsTo(db.CourseOffering, { foreignKey: 'allocationId' });

db.User.hasMany(db.ActivityLog, { foreignKey: 'facilitatorId' });
db.ActivityLog.belongsTo(db.User, { foreignKey: 'facilitatorId' });

module.exports = db;