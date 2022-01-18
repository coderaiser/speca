{
    import {calc} from './<filename>';
    import {test} from 'supertape';

    test('name: calc', t => {
        const result = calc(a, b);
        const expected = [];
        t.deepEqual(result, expected);
        t.end();
    });
}
