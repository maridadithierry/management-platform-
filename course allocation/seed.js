// seed.js
require('dotenv').config();
const { sequelize } = require('./models');
const { User, Module, Cohort, Class, Mode, CourseOffering } = require('./models');

async function seed() {
  try {
    await sequelize.sync({ force: true }); // Recreates all tables
    console.log('✅ Database synced');

    // Create Users
    const manager = await User.create({ name: 'Admin Manager', role: 'manager', email: 'admin@example.com', password: '123456' });
    const facilitator = await User.create({ name: 'Jane Facilitator', role: 'facilitator', email: 'jane@example.com', password: '123456' });

    // Create Modules
    const module1 = await Module.create({ name: 'Web Development' });
    const module2 = await Module.create({ name: 'Data Science' });

    // Create Cohorts
    const cohort1 = await Cohort.create({ name: 'Cohort 2024' });

    // Create Classes
    const class1 = await Class.create({ name: '2024S' });

    // Create Modes
    const mode1 = await Mode.create({ name: 'Online' });

    // Create Course Offerings
    await CourseOffering.create({
      moduleId: module1.id,
      facilitatorId: facilitator.id,
      classId: class1.id,
      cohortId: cohort1.id,
      trimester: 'HT1',
      intake: 'FT',
      modeId: mode1.id
    });

    console.log('✅ Dummy data inserted');
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding data:', err);
    process.exit(1);
  }
}

seed();
