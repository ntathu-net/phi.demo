const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, 'views');
const distDir = path.join(__dirname, 'dist');

// Set EJS views directory
ejs.fileLoader = (filePath) => {
    return fs.readFileSync(path.join(viewsDir, filePath), 'utf8');
};

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
const files = ['index', 'about'];

files.forEach(file => {
    const ejsPath = path.join(viewsDir, `${file}.ejs`);

    const template = fs.readFileSync(ejsPath, 'utf8');
    const html = ejs.render(template, { title: file === 'index' ? 'Home' : 'About' });

    const htmlPath = path.join(distDir, `${file}.html`);
    fs.writeFileSync(htmlPath, html);
});

console.log('Build complete');
