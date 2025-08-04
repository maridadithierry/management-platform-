const Queue = require('bull');

const notificationQueue = new Queue('notifications', {
  redis: { port: 6379, host: '127.0.0.1' }
});

notificationQueue.process(async (job) => {
  try {
    const { type, log, facilitatorId, message } = job.data;
    console.log(`📨 Worker processing ${type} notification for facilitator ${facilitatorId || log?.facilitatorId}`);
    console.log('Message:', message || `Check log ID: ${log?.id}`);
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log('✅ Notification processed.');
  } catch (error) {
    console.error('❌ Worker error:', error.message);
  }
});