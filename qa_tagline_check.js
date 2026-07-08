// qa_tagline_check.js
// Verify tagline on mosaic page (index.html) per task t_a485175f
// Exit 0 = pass, 1 = fail

const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
let pass = true;
const failMsgs = [];

function fail(msg) {
  pass = false;
  failMsgs.push('- FAIL: ' + msg);
}

// 1) Tagline exact wording (must be lowercase "where")
const expectedTagline = 'where design, code, and marketing play a winning hand.';
const expectedP = '<p>' + expectedTagline + '</p>';

if (!file.includes(expectedP)) {
  // Locate the actual tagline for diagnostics
  const idx = file.indexOf('<div class="foot">');
  const foot = file.substring(idx, idx + 300);
  const actualMatch = foot.match(/<p>(.+?)<\/p>/);
  const actual = actualMatch ? actualMatch[1] : '(not found)';
  fail(
    'Tagline mismatch. Expected: "' + expectedTagline +
    '" Actual: "' + actual + '"'
  );
}

// 2) Tagline color is white (#ffffff)
const colorRule = file.match(/\.foot\s+p\s*\{([^}]*)\}/s);
if (!colorRule) {
  fail('No .foot p rule found');
} else {
  const rule = colorRule[1];
  const colorMatch = rule.match(/color:\s*(#[\da-fA-F]+)/);
  if (!colorMatch) {
    fail('.foot p rule has no color declaration');
  } else if (colorMatch[1].toLowerCase() !== '#ffffff') {
    fail('Tagline color is ' + colorMatch[1] + ', expected #ffffff');
  }
}

// 3) Font size -6pt vs prior clamp(12px,2.5vw,16px) => clamp(6px,2.5vw,10px)
if (colorRule && !colorRule[1].includes('font-size:clamp(6px,2.5vw,10px)')) {
  fail('.foot p font-size not clamp(6px,2.5vw,10px)');
}

// 4) No visual regressions
if (!file.includes('ACE&nbsp;WERK')) fail('Logo missing');
if (!file.includes('Move across the mosaic')) fail('Hint missing');
if (!file.includes('id="screenlink"')) fail('screenlink missing');

console.log('--- qa_tagline_check results ---');
if (!pass) {
  failMsgs.forEach(m => console.log(m));
  console.log('OVERALL: FAIL');
  process.exit(1);
} else {
  console.log('- PASS: Tagline exact wording');
  console.log('- PASS: Tagline color is #ffffff');
  console.log('- PASS: font-size clamp(6px,2.5vw,10px) (-6pt vs prior)');
  console.log('- PASS: No regressions (logo, hint, screenlink)');
  console.log('OVERALL: PASS');
  process.exit(0);
}
