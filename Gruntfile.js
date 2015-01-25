var radic = require('radic');

module.exports = function(grunt){

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        bin: {
            options: {
                wrap: ['ls', 'thrift', 'mkdir'],
                output: true
            },
            thrift: {
                commands: [
                    ['mkdir', 'lib/thrift'],
                    ['thrift', {gen: 'js:node', out: 'lib/thrift'}, 'CoreService.thrift']
                ]
            }

        }
    });


    grunt.registerTask('thrift', ['bin:thrift']);

};
