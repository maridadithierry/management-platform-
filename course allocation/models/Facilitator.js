module.exports = (sequelize, DataTypes) => {
  const Facilitator = sequelize.define(
    'Facilitator',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: { isEmail: true },
      },
      department: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'Facilitator', // exact name as in your MySQL DB
      timestamps: false          // set to true only if your table has createdAt/updatedAt
    }
  );

  return Facilitator;
};
