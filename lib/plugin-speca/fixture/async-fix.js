{
    import {calc} from './<filename>';

    test('name: calc', async (t) => {
        const result = await calc('a', 'b');
        const expected = [];
        t.deepEqual(result, expected);
        t.end();
    });
}
