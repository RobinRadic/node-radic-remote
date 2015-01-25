#!/usr/bin/env node
var radic = require('radic'),
    cli = radic('cli'),
    rr = require('./lib/index');

require('./lib/commands')(cli);
cli.title('  |  ' + cli.green.bold('radic-remote') + '  | ' + cli.yellow('v' + rr.version) + ' |');

cli.usage('radic-remote [command] ' + cli.gray('[[subcommands]]'));
cli.parse(process.argv);
