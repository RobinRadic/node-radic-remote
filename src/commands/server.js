var radic = require('radic'),
    util = radic.util,
    path = require('path'),
    manager = require('daemon-manager');
module.exports = function (cli) {

    cli.command('server OR server :action')
        .description('Copy/edit/link resource files to customise generated files.')
        .usage({
            'server info': 'Displays the current resources configuration and status'
        })
        .method(function (cmd) {
            if (typeof cmd.action === 'undefined') {
                cli.log.fatal('Not enough arguments, config requires an action');
            } else {


                controller = new manager.Controller({
                    script: path.resolve(__dirname, '../server.js')
                });

                controller.on('ready',function(){
                    console.log('Ready for communication on port '+controller.port.toString()+'....');
                });

                switch (cmd.action) {
                    case "launch":

                        controller.launch();
                        break;
                    case "link":
                        cli.log('Not yet implemented');
                        break;
                    case "info":
                        cli.log.ok('Configuration cleared');
                        break;
                }
            }
        });



};