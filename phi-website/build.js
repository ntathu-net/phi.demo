const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, 'views');
const distDir = path.join(__dirname, 'dist');

// Set EJS views directory
ejs.root = viewsDir;

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Copy public directory
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
    fs.cpSync(publicDir, path.join(distDir, 'public'), { recursive: true });
}

// Render EJS files to HTML
const files = ['index', 'about', 'mission', 'contact', 'strategy', 'initiatives'];

files.forEach(file => {
    const ejsPath = path.join(viewsDir, `${file}.ejs`);

    ejs.renderFile(ejsPath, { title: file === 'index' ? 'Home' : (file === 'about' ? 'About' : (file === 'mission' ? 'Mission' : (file === 'contact' ? 'Contact' : (file === 'strategy' ? 'Strategy' : 'Strategic Initiatives')))) }, (err, html) => {
        if (err) {
            console.error(err);
            return;
        }

        const htmlPath = path.join(distDir, `${file}.html`);
        fs.writeFileSync(htmlPath, html);
    });
});

console.log('Build complete');
