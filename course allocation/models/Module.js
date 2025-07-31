module.exports = (sequelize, DataTypes) => {
  const Module = sequelize.define('Module', {
    code: DataTypes.STRING,
    title: DataTypes.STRING
  });

  return Module;
};
