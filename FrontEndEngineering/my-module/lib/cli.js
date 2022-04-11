#!/usr/bin/env node
'use strict';
const meow = require('meow');
const praticeModule = require('./');

const cli = meow(`
Usage
  $ pratice-module [input]

Options
  --foo  Lorem ipsum. [Default: false]

Examples
  $ pratice-module
  unicorns
  $ pratice-module rainbows
  unicorns & rainbows
`);
