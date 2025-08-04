// cron/reminderJob.js
const cron = require('node-cron');
const { ActivityLog, CourseOffering } = require('../models');
const { sendNotification } = require('../notifications/queue');

cron.schedule('0 18 * * 5', async () => {
  console.log('⏰ Running Friday 6 PM reminder job');

  try {
    // This is a sample logic. Adjust it to match your actual schema/logic.
    const incompleteLogs = await ActivityLog.findAll({
      where: {
        formativeOneGrading: 'Not Started',
        summativeGrading: 'Not Started',
        courseModeration: 'Not Started'
      },
      include: [CourseOffering]
    });

    for (const log of incompleteLogs) {
      await sendNotification({
        type: 'reminder',
        facilitatorId: log.facilitatorId,
        message: `Reminder: You haven't completed the log for week ${log.weekNumber}.`
      });
    }
  } catch (error) {
    console.error('Cron job error:', error.message);
  }
});
