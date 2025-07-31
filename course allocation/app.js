// app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./models'); // import the Sequelize instance

// Load environment variables
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

//courseOffering routes
const courseOfferingRoutes = require('./routes/courseOffering');
app.use('/course-offerings', courseOfferingRoutes);

// Facilitator routes
const facilitatorRoutes = require('./routes/facilitator');
app.use('/facilitators', facilitatorRoutes);
// Class routes
const classRoutes = require('./routes/class');
app.use('/classes', classRoutes);
// User routes
const userRoutes = require('./routes/user');
app.use('/users', userRoutes);

//cohort routes
const cohortRoutes = require('./routes/cohort');
app.use('/cohorts', cohortRoutes);
//mode routes
const modeRoutes = require('./routes/mode');
app.use('/modes', modeRoutes);

// module routes
const moduleRoutes = require('./routes/module');
app.use('/modules', moduleRoutes);
// Student routes
const studentRoutes = require('./routes/student');
app.use('/students', studentRoutes);





// Health check
app.get('/', (req, res) => {
  res.send('Course Allocation System API is running.');
});

// Sync DB (optional in dev, not recommended in prod without migration tools)
sequelize.sync()
  .then(() => console.log('✅ Database synced successfully'))
  .catch((err) => console.error('❌ Database sync failed:', err));

module.exports = app;
