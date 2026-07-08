const fs = require('fs');
const html = fs.readFileSync('./index.html','utf-8');

// Show bytes around .foot
const fi = html.indexOf('.foot');
console.log('FOOT region (first 400 chars):');
console.log(JSON.stringify(html.substring(fi, fi+400)));

// Show bytes around tagline
const ti = html.indexOf('where design');
console.log('\nTAGLINE region (120 chars around):');
console.log(JSON.stringify(html.substring(ti-20, ti+120)));

// Check exact match
const expected = 'where design, code, and marketing play a winning hand.';
const actualTag = `<p>${expected}</p>`;
console.log('\nExact <p> tag match:', html.includes(actualTag));

// Check .foot p color
const colorRule = html.match(/\.foot\s+p\s*\{([^}]*)\}/s);
console.log('.foot p rule:', colorRule ? colorRule[1].trim() : 'NOT FOUND');

// Check font-size clamp
const fontRule = html.match(/font-size:\s*clamp\(([^)]+)\)/);
console.log('font-size clamp:', fontRule ? fontRule[0] : 'NOT FOUND');
