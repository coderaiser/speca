import {test} from 'supertape';
import {calc} from './hello.js';

test('name: calc', (t) => {
    const result = calc('a', 'b');
    const expected = '';
    t.equal(result, expected);
    t.end();
});
