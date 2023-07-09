{
    import {calc} from './hello.js';

    test('name: calc', (t) => {
        const result = calc('a', 'b');
        const expected = [];
        t.deepEqual(result, expected);
        t.end();
    });
}
