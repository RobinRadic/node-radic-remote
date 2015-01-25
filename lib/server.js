var thrift = require('thrift'),
    Thrift = thrift.Thrift,
    CoreService = require('./thrift/CoreService'),
    CoreServiceHandler = require('./thrift/CoreServiceHandler');


var data = {};

var processor = new thrift.MultiplexedProcessor();
processor.registerProcessor("CoreService", new CoreService.Processor(CoreServiceHandler));

var transport =  thrift.TBufferedTransport;
var protocol = thrift.TBinaryProtocol;

var server = thrift.createMultiplexServer(processor, {
    transport: transport,
    protocol: protocol
});

server.on('message', function(data){ console.log('data', data) });


server.listen(9090);
//process.send('START');