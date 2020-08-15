// app.js
require('dotenv').config();
const express = require('express');
const http = require('http');
const next = require('next');
const morgan = require('morgan');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const auth = require('./auth');
const connectDB = require('./config/db');

// Settings
const port = process.env.PORT || 8082;
const dev = process.env.NODE_ENV !== 'production';

// DB Connection
connectDB();

// Initializations
const nextApp = next({
  dev,
  dir: './src',
});

nextApp.prepare().then(() => {
  const app = express();

  // Middlewares
  app.use(
    morgan('dev', {
      skip: (req, res) => req.url.startsWith('/_next'),
    }),
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  // Adding Passport and initialise Authentication
  app.use(passport.initialize());
  auth.initialiseAuthentication(app);

  // Routes
  app.use('/api', require('./routes'));

  // handling everything else with Next.js
  app.get('*', nextApp.getRequestHandler());

  // Start server
  http.createServer(app).listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
