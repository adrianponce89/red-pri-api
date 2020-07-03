// app.js
require('dotenv').config({ path: __dirname + '/.env' });
const express =  require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Initializations
const app = express();

// Settings
const port = process.env.PORT || 8082;

// DB Connection
connectDB();

// Middlewares
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => res.send('Hello world!'));

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
