#!/usr/bin/env node

import {cli} from '../lib/cli/cli.js';
import {readFileSync, writeFileSync} from 'fs';

cli({
    log: console.log,
    argv: process.argv,
    exit: process.exit,
    readFileSync,
    writeFileSync,
});

