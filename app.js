// app.js
require('dotenv').config({ path: __dirname + '/.env' });
const express =  require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Initializations
const app = express();

// importing routes
const articles = require('./routes/articles');

// DB Connection
connectDB();

// Settings
const port = process.env.PORT || 8082;

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('Hello world!'));
app.use('/articles', articles);

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
