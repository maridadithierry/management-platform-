const Queue = require('bull');
const notificationQueue = new Queue('notifications', {
  redis: { port: 6379, host: '127.0.0.1' }
});

notificationQueue.process(async (job) => {
  const { type, log, facilitatorId, message } = job.data;
  console.log(`🔔 Notification (${type}):`, message || `Facilitator ${facilitatorId} log ${log?.id}`);
  // Here you'd send an actual email, push, or in-app notification
});

exports.sendNotification = async (data) => {
  await notificationQueue.add(data);
};