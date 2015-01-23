var thrift = require('thrift'),
    service = require('./thrift/remote_service'),
    types = require('./thrift/remote_service_types'),
    handler = require('./thrift/handler');


var data = {};

var server = thrift.createServer(service, handler);

server.listen(9090);