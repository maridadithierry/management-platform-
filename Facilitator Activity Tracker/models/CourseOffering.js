module.exports = (sequelize, DataTypes) => {
  const CourseOffering = sequelize.define('CourseOffering', {
    moduleName: { type: DataTypes.STRING, allowNull: false },
    className: { type: DataTypes.STRING, allowNull: false },
    trimester: { type: DataTypes.STRING, allowNull: false },
    cohort: { type: DataTypes.STRING, allowNull: false },
    intakePeriod: { type: DataTypes.STRING, allowNull: false },
    mode: { type: DataTypes.STRING, allowNull: false }
  });
  return CourseOffering;
};
