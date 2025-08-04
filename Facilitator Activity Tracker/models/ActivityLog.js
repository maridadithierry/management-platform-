module.exports = (sequelize, DataTypes) => {
  const ActivityLog = sequelize.define('ActivityLog', {
    weekNumber: { type: DataTypes.INTEGER, allowNull: false },
    allocationId: { type: DataTypes.INTEGER, allowNull: false },
    facilitatorId: { type: DataTypes.INTEGER, allowNull: false },
    attendance: { type: DataTypes.JSON, allowNull: false },
    formativeOneGrading: { type: DataTypes.ENUM('Done', 'Pending', 'Not Started'), defaultValue: 'Not Started' },
    formativeTwoGrading: { type: DataTypes.ENUM('Done', 'Pending', 'Not Started'), defaultValue: 'Not Started' },
    summativeGrading: { type: DataTypes.ENUM('Done', 'Pending', 'Not Started'), defaultValue: 'Not Started' },
    courseModeration: { type: DataTypes.ENUM('Done', 'Pending', 'Not Started'), defaultValue: 'Not Started' },
    intranetSync: { type: DataTypes.ENUM('Done', 'Pending', 'Not Started'), defaultValue: 'Not Started' },
    gradeBookStatus: { type: DataTypes.ENUM('Done', 'Pending', 'Not Started'), defaultValue: 'Not Started' }
  });
  return ActivityLog;
};
