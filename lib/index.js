var path = require('path'),

    radic = require('radic'),
    util = radic('util'),
    bin = radic('binwraps'),
    Config = radic('config'),

    _ = radic('lodash'),
    semver = radic('semver');

//var binwraps = require('radic/binwraps');

module.exports = function(){

    function RadicRemote(options){

        options = _.merge({}, options);
        configVersion = '0.0.2';
        configDefaults = {

        };
        this.config = new Config('radic-remote');

        if(util.defined(this.config.get('configversion')) === false || semver.lt(this.config.get('configversion'), configVersion)){
            this.config.config = _.merge(configDefaults, this.config.config);
            this.config.set('configversion', configVersion);
            this.config.save();
        }
    }

    RadicRemote.prototype.get = function(name){
        return require('./' + name);
    };



    var radicRemote = new RadicRemote();
    radicRemote.RadicRemote = RadicRemote;
    return radicRemote;
}.call();
