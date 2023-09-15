import {
    dirname,
    join,
} from 'node:path';
import {fileURLToPath} from 'node:url';
import {readFileSync} from 'node:fs';
import {test} from 'supertape';
import {speca} from './speca.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const readFixture = (a) => readFileSync(join(__dirname, 'fixture', `${a}.js`), 'utf8');

test('speca: one', (t) => {
    const input = readFixture('const');
    const result = speca('/abc/hello.js', input);
    const expected = readFixture('const-fix');
    
    t.equal(result, expected);
    t.end();
});

test('speca: couple', (t) => {
    const input = readFixture('couple');
    const result = speca('/abc/couple.js', input);
    const expected = readFixture('couple-fix');
    
    t.equal(result, expected);
    t.end();
});
