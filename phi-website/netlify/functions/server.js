const express = require('express');
const path = require('path');
const serverless = require('serverless-http');

const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../dist/views'));

// Serve static files
app.use(express.static(path.join(__dirname, '../../dist/public')));

// Route for home page using EJS
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// Example route for another page
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// Catch all other routes
app.get('*', (req, res) => {
    res.render('index', { title: 'Home' });
});

module.exports = app;
module.exports.handler = serverless(app);
