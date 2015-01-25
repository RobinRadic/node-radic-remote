#!/usr/bin/env node
var sqlite = require('sqlite3').verbose(),
    radic = require('radic'),
    util = radic.util,
    cli = radic.cli,
    DB = radic.DB,
    path = require('path'),
    open = require('open'),
    async = require('async'),

    dbPath = path.resolve(util.getUserHomeDir(), '.config/chromium/Default/Cookies'),
    db = DB.createDatabase('sqlite', dbPath);

var al = module.exports = {};

al.execute = function(){
    async.waterfall([
        function(next){
            al.generateCookie(function(selected){
                cli.log('Selected returned');
                console.log(selected);
                next();
            })
        },
        function(next){
            var req = require('http').request({
                hostname: 'anilinkz.com',
                path: '/anime-list'
            }, function(res){
                console.log('STATUS: ' + res.statusCode);
                console.log('HEADERS: ' + JSON.stringify(res.headers));
                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    //console.log('BODY: ' + chunk);
                    var matches = chunk.match(/href="\/series\/([\w\W]*?)">/g);
                    console.log(matches);
                });
                res.on('end', function(){
                    cli.log.ok('end');
                    next();
                });
                res.end();
            });

        },
        function(next){
            cli.log.ok('done');
        }
    ])
};

al.generateCookie = function(cb){
    //open('http://anilinkz.com');
    setTimeout(function(){
        var selected = db.each("SELECT * FROM cookies WHERE host_key LIKE '%anilinkz%'", function(err, row){
            console.log(err, row);
        });
        cb(selected);
    }, 1000);
};


cli.log('Starting');
al.execute();
