{
    import {call} from './called-with.js';

    test('name: call', t => {
        const result = call('fn');
        t.calledWithNoArgs(fn);
        t.end();
    });
}

{
    import {callArgs} from './called-with.js';

    test('name: callArgs', t => {
        const result = callArgs('fn');
        const expected = [];
        t.calledWith(fn, expected);
        t.end();
    });
}

