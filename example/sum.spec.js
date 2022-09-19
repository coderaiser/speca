import {test} from 'supertape';
import {sum} from './sum.js';

test('name: sum', (t) => {
    const result = sum('a', 'b');
    const expected = 'ab';
    
    t.equal(result, expected);
    t.end();
});

