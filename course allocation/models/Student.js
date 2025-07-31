// models/Student.js
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    cohortId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Student.associate = (models) => {
    Student.belongsTo(models.Cohort, {
      foreignKey: 'cohortId',
      as: 'cohort'
    });
  };

  return Student;
};
