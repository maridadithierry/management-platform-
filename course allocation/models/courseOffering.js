module.exports = (sequelize, DataTypes) => {
  const CourseOffering = sequelize.define('CourseOffering', {
    trimester: DataTypes.STRING,
    intake: DataTypes.ENUM('HT1', 'HT2', 'FT')
  });

  return CourseOffering;
};
