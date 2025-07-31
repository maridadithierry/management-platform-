module.exports = (sequelize, DataTypes) => {
  const Mode = sequelize.define('Mode', {
    name: DataTypes.STRING
  });

  return Mode;
};
