import {createTest} from '@putout/test';
import * as speca from './index.js';

const test = createTest(import.meta.url, {
    speca,
});

test('escover: instrument: add lines: report', ({report}) => {
    report('const', 'Use Speca');
});

test('escover: instrument: add lines: transform', ({transform}) => {
    transform('const');
});

test('escover: instrument: add lines: transform: body', ({transform}) => {
    transform('body');
});

test('escover: instrument: add lines: transform: options', ({transformWithOptions}) => {
    transformWithOptions('options', {
        name: 'hello.js',
    });
});

