// server.js
const app = require('./app');
const { sequelize } = require('./models');
require('dotenv').config();
require('./cron/reminderJob'); // start cron jobs
require('./notifications/worker'); // start background worker

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected');
    
    await sequelize.sync({ alter: true }); // sync models with DB
    console.log('🔄 Database synced');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Unable to start server:', err.message);
  }
})();
