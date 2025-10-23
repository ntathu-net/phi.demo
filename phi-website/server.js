const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for home page using EJS
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// Example route for another page
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// Additional route for /about.html to render the same about page
app.get('/about.html', (req, res) => {
    res.render('about', { title: 'About' });
});

// Route for mission page
app.get('/mission', (req, res) => {
    res.render('mission', { title: 'Mission' });
});

// Additional route for /mission.html
app.get('/mission.html', (req, res) => {
    res.render('mission', { title: 'Mission' });
});

// Route for contact page
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

// Additional route for /contact.html
app.get('/contact.html', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

// Route for strategy page
app.get('/strategy', (req, res) => {
    res.render('strategy', { title: 'Strategy' });
});

// Additional route for /strategy.html
app.get('/strategy.html', (req, res) => {
    res.render('strategy', { title: 'Strategy' });
});

// Route for initiatives page
app.get('/initiatives', (req, res) => {
    res.render('initiatives', { title: 'Strategic Initiatives' });
});

// Additional route for /initiatives.html
app.get('/initiatives.html', (req, res) => {
    res.render('initiatives', { title: 'Strategic Initiatives' });
});

// Route for donation page
app.get('/donate', (req, res) => {
    res.render('donate', { title: 'Donate' });
});

// Additional route for /donate.html
app.get('/donate.html', (req, res) => {
    res.render('donate', { title: 'Donate' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
