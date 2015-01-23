var radic = require('radic'),
    cli = radic.cli;

require('../src/commands')(cli);
cli.title('  |  ' + cli.green.bold('radic-remote title') + '  | ' + cli.yellow('v1.0.5') + ' |');

cli.usage('myclicmd [command] ' + cli.gray('[[subcommands]]'));
cli.parse(process.argv);