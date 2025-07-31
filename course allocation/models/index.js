const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME ||  process.env.DB_USERNAME,
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
  }
);

// Load models
const User = require('./User')(sequelize, DataTypes);
const Module = require('./Module')(sequelize, DataTypes);
const Cohort = require('./Cohort')(sequelize, DataTypes);
const Class = require('./Class')(sequelize, DataTypes);
const Mode = require('./Mode')(sequelize, DataTypes);
const CourseOffering = require('./courseOffering')(sequelize, DataTypes);
const Facilitator = require('./Facilitator')(sequelize, Sequelize.DataTypes);
const student = require('./student')(sequelize, DataTypes);


// Set up associations
User.hasMany(CourseOffering, { foreignKey: 'facilitatorId' });
CourseOffering.belongsTo(User, { foreignKey: 'facilitatorId' });

Module.hasMany(CourseOffering);
CourseOffering.belongsTo(Module);

Cohort.hasMany(CourseOffering);
CourseOffering.belongsTo(Cohort);

Class.hasMany(CourseOffering);
CourseOffering.belongsTo(Class);

Mode.hasMany(CourseOffering);
CourseOffering.belongsTo(Mode);

// Export
module.exports = {
  sequelize,
  User,
  Module,
  Cohort,
  Class,
  Mode,
  CourseOffering,
  Facilitator
  , student
};
