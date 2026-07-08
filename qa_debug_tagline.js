const fs = require('fs');
const html = fs.readFileSync('./index.html', 'utf-8');
const needle = '<p>where design, code, and marketing play a winning hand.</p>';

console.log('Looking for:', JSON.stringify(needle));

// Find any <p> near "where design"
const idx = html.indexOf('where design');
console.log('Index of "where design":', idx);

// Show 80 chars before and after that index
const before = html.substring(Math.max(0, idx - 40), idx);
const after  = html.substring(idx, idx + 100);

console.log('Before (hex):', Buffer.from(before).toString('hex'));
console.log('After (hex):', Buffer.from(after).toString('hex'));

console.log('Before (chars):', JSON.stringify(before));
console.log('After (chars):', JSON.stringify(after));

console.log('Exact match:', html.includes(needle));
