import {basename} from 'path';
import putout from 'putout';

import * as specaPlugin from './plugin-speca/index.js';

export const speca = (url, source) => {
    const name = basename(url);
    const options = {
        rules: {
            speca: ['on', {
                name,
            }],
        },
        plugins: [
            ['speca', specaPlugin],
            'remove-nested-blocks',
            'merge-duplicate-imports',
            'tape',
        ],
    };
    
    const {code} = putout(source, options);
    return code;
};

