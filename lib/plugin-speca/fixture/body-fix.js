{
    import {calc} from './<filename>';

    test('name: calc', t => {
        const result = calc('a', 'b');
        const expected = [];
        t.deepEqual(result, expected);
        t.end();
    });
}
