module.exports = (sequelize, DataTypes) => {
  const Cohort = sequelize.define('Cohort', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Cohort;
};
