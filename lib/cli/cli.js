import {execSync} from 'child_process';
import tryCatch from 'try-catch';
import yargsParser from 'yargs-parser';

import {version} from './version.js';
import {speca} from '../speca.js';

export const cli = ({argv, exit, log, readFileSync, writeFileSync}) => {
    const args = yargsParser(argv.slice(2), {
        boolean: [
            'version',
        ],
        alias: {
            v: 'version',
            f: 'format',
        },
    });
    
    if (args.version) {
        console.log(`v${version()}`);
        return exit();
    }
    
    const cmd = argv.slice(2);
    
    if (!cmd.length) {
        log('name is missing');
        exit(1);
    }
    
    const [name] = cmd;
    
    const outputName = name.replace('.js', '.spec.js');
    const input = readFileSync(name, 'utf8');
    const output = speca(input);
    
    writeFileSync(outputName, output);
};

