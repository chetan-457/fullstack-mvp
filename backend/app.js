require('dotenv').config(); // 👈 add this at the top
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

// Allow your Vercel frontend origin
const allowedOrigins = [
    'http://localhost:3000',        // local Next.js
    /\.vercel\.app$/                // deployed Next domain (regex via CORS v2 supports function; simple: set true in prod)
];

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var dbtestRouter = require('./routes/dbtest');
var app = express();

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', usersRouter);

module.exports = app;
