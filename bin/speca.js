#!/usr/bin/env node

import {cli} from '../lib/cli/cli.js';
import {
    readFileSync,
    writeFileSync,
} from 'node:fs';
import process from 'node:process';

cli({
    log: console.log,
    argv: process.argv,
    exit: process.exit,
    readFileSync,
    writeFileSync,
});
