// Dry-run test: simulates insert_enlightenment_6.js without writing the file
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'philosophers.ts');
let content = fs.readFileSync(file, 'utf8');
let count = 0;

function add(anchor, text) {
    const paras = text.trim().split('\\n\\n').map(p => p.replace(/\\n/g, ' ').trim()).filter(p => p);
    let exp = paras.join('\\\\n\\\\n').replace(/"/g, "'");
    const idx = content.indexOf(anchor);
    if (idx === -1) { console.log('NOT FOUND:', anchor.substring(0, 50)); return; }
    let pos = idx;
    while (pos < content.length && content[pos] !== '}') pos++;
    content = content.substring(0, pos) + ',\n        expanded:"' + exp + '"' + content.substring(pos);
    count++;
    console.log('WOULD INSERT:', anchor.substring(0, 55));
}

// Load the insert script to get the add() calls but intercept writing
const insertScript = fs.readFileSync(path.join(__dirname, 'insert_enlightenment_6.js'), 'utf8');

// Extract just the add() calls (lines between the function def and fs.writeFileSync)
// We re-run the same add() calls by reading the texts from the insert script
// But simpler: just eval the insert script with writeFileSync mocked

const origWriteFileSync = fs.writeFileSync;
fs.writeFileSync = function(f, c, enc) {
    console.log('\nDRY RUN: would write', f);
    // Verify expanded count
    const expandedCount = (c.match(/expanded:/g) || []).length;
    console.log('Total expanded fields in output:', expandedCount);
    // Verify anchors are no longer at positions without expanded
    console.log('DRY RUN COMPLETE - file NOT written');
};

// Re-read fresh content for the eval
content = fs.readFileSync(file, 'utf8');
count = 0;

// We need to re-define add() and re-run without the function redefinition
// So just directly eval the insert script with modified fs
eval(insertScript);

fs.writeFileSync = origWriteFileSync;
console.log('\nInserted count:', count);
