import {createTest} from '@putout/test';
import * as speca from './index.js';

const test = createTest(import.meta.url, {
    speca,
});

test('speca: report', ({report}) => {
    report('const', 'Use Speca');
});

test('speca: transform', ({transform}) => {
    transform('const');
});

test('speca: transform: body', ({transform}) => {
    transform('body');
});

test('speca: transform: options', ({transformWithOptions}) => {
    transformWithOptions('options', {
        name: 'hello.js',
    });
});

test('speca: transform: called-with', ({transformWithOptions}) => {
    transformWithOptions('called-with', {
        name: 'called-with.js',
    });
});

