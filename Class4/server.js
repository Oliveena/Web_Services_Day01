import express from 'express';
import { Sequelize } from 'sequelize';
import airportRoutes from './app/routes/airports.routes.js';
import Logger from 'js-logger';
import pkg from 'sequelize/lib/utils/logger';
const { logger } = pkg;

Logger.useDefaults();

Logger.setLevel(Logger.warn);
/*
Reminder: 
Logger.DEBUG
Logger.INFO
Logger.WARN
Logger.ERROR
Logger.OFF (
*/ 

const app = express();

// Use built-in middleware instead of body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use airport routes
app.use('/api/airports', airportRoutes);

// Serve static files from 'static' directory
app.use(express.static('app/static'));



// DB access with Sequelize
const sequelize = new Sequelize('utf8_general_ci', 'day05airports', '2Y1(15Gw7[!q ', {
  host: 'localhost',
  dialect: 'mysql',
});

// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

// Debugging middleware
app.use((req, res, next) => {
  console.log("Request Body:", req.body);
  console.log("Request received at:", new Date());
  console.log("Request Method:", req.method);
  console.log("Request Path:", req.path);
  next();
});

// Simple route
app.get('/', (req, res) => {
  res.json({ message: 'Hey there, user.' });
});

// Start server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  Logger.info(`Server started at port ${PORT}`);
});
