var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

// --- Core App Definition ---
var app = express(); // <--- THIS IS THE CRITICAL FIX: DEFINING 'app'

// View engine setup (optional, but good practice)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Router usage
app.use('/', indexRouter);


// --- Server Startup Configuration ---

// Define the port, using the environment variable we set (3003) or default to 3000
const port = process.env.PORT || '3000';
app.set('port', port);

// Create the HTTP server using the app configuration
const server = require('http').createServer(app);

// Tell the server to start listening for requests
server.listen(port, function() {
  console.log('Server is running at port: ' + port);
});

// We still export the app for testing or other modules
module.exports = app;
