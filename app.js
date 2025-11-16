// --- Standard Express Server Setup ---
// FIX: Moved 'express' definition up to Line 1 to guarantee it's loaded before const app = express()
var express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// --- NEW GEMINI AI CODE (TOP) ---
require('dotenv').config(); // This loads your .env file
// FIX: Changed .log to console.log to fix SyntaxError
console.log("--- KEY CHECK ---", process.env.GEMINI_API_KEY); // The debug line
const { GoogleGenerativeAI } = require("@google/generative-ai");

// FIX: Cleaned up the logic and syntax in the error check
// Check if the API key is actually loaded
if (!process.env.GEMINI_API_KEY) {
  console.error('ERROR: GEMINI_API_KEY is not set in your .env file.');
  console.error('Please create or update your .env file with GEMINI_API_KEY=YOUR_KEY_HERE');
  process.exit(1); // Stop the app if the key is missing
}

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// --- END NEW GEMINI CODE ---


// We assume you have a 'routes' folder, but we'll define the root route here
// This line now correctly executes AFTER express is defined on Line 1
var app = express();

// View engine setup (we know this from your package.json)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json()); // This is required to read JSON from the chat
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // Serves CSS and JS

// --- Define Your Page Route ---
// This tells Express to use 'index.jade' for the homepage
app.get('/', (req, res) => {
  res.render('index', { title: 'My Enterprise' });
});


// --- NEW GEMINI CHAT ROUTE ---
app.post('/chat', async (req, res) => {
  try {
    const userInput = req.body.prompt;
    if (!userInput) {
      return res.status(400).json({ error: 'No prompt provided.' });
    }

    // Get the Gemini model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    // Send the prompt to Gemini
    const result = await model.generateContent(userInput);
    const response = await result.response;
    const text = response.text();
    
    // Send the AI's text response back to the browser
    res.json({ response: text });

  } catch (error) {
    console.error('Failed to get AI response:', error);
    res.status(500).json({ error: 'Failed to get response from AI' });
  }
});
// --- END NEW GEMINI CODE ---


// --- Error Handling Setup ---
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// --- Server Startup Code (Your original code) ---
// We'll change the port to 3001 to avoid conflicts
const port = process.env.PORT || '3001';
app.set('port', port);

const server = require('http').createServer(app);

server.listen(port, function() {
  console.log('Server is running at port: ' + port);
  console.log('Visit http://localhost:3001 in your browser.');
});

module.exports = app