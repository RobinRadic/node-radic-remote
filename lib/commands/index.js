var radic = require('radic'),
    rr = require('../'),
    util = radic.util,
    requireDirectory = util.requireDirectory;

// This will recursively require all javascript files in the current directory and below
module.exports = function (cli) {
    requireDirectory(module, {
        visit: function (obj) {
            obj(cli);
        }
    });

    cli.generateCommand('config', rr.config);
};