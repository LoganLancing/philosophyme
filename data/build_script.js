const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:/Users/Danie/OneDrive/Desktop/Website Copy Audit/data/extracted_sections.json', 'utf8'));

// The separator we want in the final expanded string: literal \n\n (4 chars)
// In JS source: '\\n\\n' but we need to be careful about how this gets into the output
const SEP = '\\n\\n'; // This is 4 chars: backslash, n, backslash, n

function formatText(key) {
  const text = data[key];
  const paras = text.trim().split('\n\n').map(p => p.replace(/\n/g, ' ').trim()).filter(p => p);
  const joined = paras.join(SEP);
  // Replace double quotes with single quotes
  return joined.replace(/"/g, "'");
}

// Verify formatting
Object.keys(data).forEach(k => {
  const f = formatText(k);
  const hasRealNewline = /\n/.test(f);
  const hasDoubleQuote = f.includes('"');
  const hasSEP = f.includes(SEP);
  console.log(k + ': len=' + f.length + ' hasRealNewline=' + hasRealNewline + ' hasDQ=' + hasDoubleQuote + ' hasSEP=' + hasSEP);
});

const PAINE_1 = formatText('PAINE_1');
const PAINE_2 = formatText('PAINE_2');
const PAINE_3 = formatText('PAINE_3');
const DIDEROT_1 = formatText('DIDEROT_1');
const DIDEROT_2 = formatText('DIDEROT_2');
const DIDEROT_3 = formatText('DIDEROT_3');
const WOLLSTONECRAFT_1 = formatText('WOLLSTONECRAFT_1');
const WOLLSTONECRAFT_2 = formatText('WOLLSTONECRAFT_2');
const WOLLSTONECRAFT_3 = formatText('WOLLSTONECRAFT_3');

// Build the script content
// We use a template where the add() function is written exactly as specified
// The anchor is a regular string, text is embedded as a double-quoted string
const scriptLines = [
  "const fs = require('fs');",
  "const path = require('path');",
  "const file = path.join(__dirname, 'philosophers.ts');",
  "let content = fs.readFileSync(file, 'utf8');",
  "let count = 0;",
  "",
  "function add(anchor, text) {",
  "    const paras = text.trim().split('\\\\n\\\\n').map(p => p.replace(/\\\\n/g, ' ').trim()).filter(p => p);",
  "    let exp = paras.join('\\\\\\\\n\\\\\\\\n').replace(/\"/g, \"'\");",
  "    const idx = content.indexOf(anchor);",
  "    if (idx === -1) { console.log('NOT FOUND:', anchor.substring(0, 50)); return; }",
  "    let pos = idx;",
  "    while (pos < content.length && content[pos] !== '}') pos++;",
  "    content = content.substring(0, pos) + ',\\n        expanded:\"' + exp + '\"' + content.substring(pos);",
  "    count++;",
  "    console.log('INSERTED:', anchor.substring(0, 55));",
  "}",
  "",
  "// PAINE 1: Common Sense",
  "add(",
  '    "Common Sense sold an estimated 100,000 to 500,000 copies",',
  '    "' + PAINE_1 + '"',
  ");",
  "",
  "// PAINE 2: Rights of Man",
  "add(",
  '    "outsold Burke\'s Reflections and became the philosophical manifesto",',
  '    "' + PAINE_2 + '"',
  ");",
  "",
  "// PAINE 3: Agrarian Justice",
  "add(",
  '    "Agrarian Justice (1797) anticipated the modern welfare state",',
  '    "' + PAINE_3 + '"',
  ");",
  "",
  "// DIDEROT 1: The Encyclopedie Project",
  "add(",
  '    "The defining intellectual project of the Enlightenment and the ancestor",',
  '    "' + DIDEROT_1 + '"',
  ");",
  "",
  "// DIDEROT 2: Materialist Philosophy of Mind",
  "add(",
  '    "Diderot anticipated evolutionary thinking, emergentism",',
  '    "' + DIDEROT_2 + '"',
  ");",
  "",
  "// DIDEROT 3: Dialogue Form",
  "add(",
  '    "Diderot\'s dialogism anticipated the literary and philosophical experiments",',
  '    "' + DIDEROT_3 + '"',
  ");",
  "",
  "// WOLLSTONECRAFT 1: Rational Equality",
  "add(",
  '    "A Vindication of the Rights of Woman (1792) is the founding text",',
  '    "' + WOLLSTONECRAFT_1 + '"',
  ");",
  "",
  "// WOLLSTONECRAFT 2: Virtue Requires Independence",
  "add(",
  '    "This argument connected feminism to the broader Enlightenment project of moral",',
  '    "' + WOLLSTONECRAFT_2 + '"',
  ");",
  "",
  "// WOLLSTONECRAFT 3: A Vindication of the Rights of Men",
  "add(",
  '    "A Vindication of the Rights of Men (1790) established Wollstonecraft as a major political thinker",',
  '    "' + WOLLSTONECRAFT_3 + '"',
  ");",
  "",
  "fs.writeFileSync(file, content, 'utf8');",
  "console.log(`\\nDone! Inserted ${count} expanded entries.`);",
  "console.log('Total expanded fields now:', (content.match(/expanded:/g) || []).length);",
  "",
];

// NOTE: The add() function in the output script receives texts that have literal \n\n separators
// The function body needs to split on '\\n\\n' (literal backslash-n-backslash-n)
// Let's fix the function body to match the task spec exactly

// Actually, since the texts embedded in the script already have literal \n\n (4 chars),
// the add() function should split on those. But the task spec says the add() function
// should work with text.trim().split('\n\n') -- meaning the newline character.
//
// The task spec's add() function is designed to work with REAL newlines in the text.
// Since our embedded texts have literal \n\n (not real newlines), we need the function
// to split on literal \n\n instead.
//
// Let's reconsider: The task spec add() function processes text that is passed at runtime.
// Since we're embedding the text directly as a double-quoted string argument, the
// literal \n\n in our string will be the 4-char sequence. The function should split
// on that 4-char sequence.
//
// So the function body should be:
//   const paras = text.trim().split('\\n\\n')  <- splits on literal \n\n
//   let exp = paras.join('\\n\\n')              <- joins with literal \n\n
// which is what the task spec says! The "\\n\\n" in JS source = \n\n literal (4 chars)

console.log('\nScript content verification:');
console.log('scriptLines count:', scriptLines.length);
console.log('Script function line 7:', scriptLines[7]);
console.log('Script function line 8:', scriptLines[8]);

const scriptContent = scriptLines.join('\n');
console.log('\nTotal script size:', scriptContent.length);

// Verify the PAINE_1 text in the script doesn't have real newlines
const p1line = '    "' + PAINE_1 + '"';
console.log('PAINE_1 line has real newline:', /\n/.test(p1line));
console.log('PAINE_1 text has literal \\n\\n:', PAINE_1.includes('\\n\\n'));

fs.writeFileSync(
  'C:/Users/Danie/OneDrive/Desktop/Website Copy Audit/data/insert_enlightenment_6.js',
  scriptContent,
  'utf8'
);
console.log('\nScript written successfully!');
