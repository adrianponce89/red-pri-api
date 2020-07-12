// app.js
require('dotenv').config();
const express =  require('express');
const http = require('http');
const next = require("next");
const morgan = require('morgan');
const passport = require('passport');
const expressSession = require('express-session');
const connectDB = require('./config/db');

// Settings
const port = process.env.PORT || 8082;
const dev = process.env.NODE_ENV !== "production";

// DB Connection
connectDB();

// Initializations
const app = next({
  dev,
  dir: "./src"
});

app.prepare().then(() => {
  const server = express();

  // Middlewares
  server.use(morgan('dev', {
    skip: (req, res) => req.url.startsWith('/_next')
  }));
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));

  // Configuring Passport
  require('./passport/local-auth')(passport);

  // Adding Passport and authentication routes
  server.use(expressSession({
    secret: process.env.SESSION_KEY,
    resave: true,
    saveUninitialized: true
  }));
  server.use(passport.initialize());
  server.use(passport.session());
  
  // Routes
  server.use('/api', require('./routes'));
  
  // handling everything else with Next.js
  server.get("*", app.getRequestHandler());
  
  // Start server
  http.createServer(server).listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
