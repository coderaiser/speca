import {
    dirname,
    join,
} from 'path';
import {fileURLToPath} from 'url';
import {readFileSync} from 'fs';
import {test} from 'supertape';

import {speca} from './speca.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const readFixture = (a) => readFileSync(join(__dirname, 'fixture', `${a}.js`), 'utf8');

test('speca', (t) => {
    const input = readFixture('const');
    const result = speca('/abc/hello.js', input);
    const expected = readFixture('const-fix');
    
    t.equal(result, expected);
    t.end();
});
