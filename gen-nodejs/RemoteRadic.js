//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./RemoteRadic_types');
//HELPER FUNCTIONS AND STRUCTURES

radic.remote.RemoteRadic_runConsoleCommand_args = function(args) {
  this.authString = null;
  this.command = null;
  if (args) {
    if (args.authString !== undefined) {
      this.authString = args.authString;
    }
    if (args.command !== undefined) {
      this.command = args.command;
    }
  }
};
radic.remote.RemoteRadic_runConsoleCommand_args.prototype = {};
radic.remote.RemoteRadic_runConsoleCommand_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.authString = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.command = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

radic.remote.RemoteRadic_runConsoleCommand_args.prototype.write = function(output) {
  output.writeStructBegin('RemoteRadic_runConsoleCommand_args');
  if (this.authString !== null && this.authString !== undefined) {
    output.writeFieldBegin('authString', Thrift.Type.STRING, 1);
    output.writeString(this.authString);
    output.writeFieldEnd();
  }
  if (this.command !== null && this.command !== undefined) {
    output.writeFieldBegin('command', Thrift.Type.STRING, 2);
    output.writeString(this.command);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

radic.remote.RemoteRadic_runConsoleCommand_result = function(args) {
  this.success = null;
  this.aex = null;
  this.dex = null;
  if (args instanceof ttypes.EAuthException) {
    this.aex = args;
    return;
  }
  if (args instanceof ttypes.EDataException) {
    this.dex = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.aex !== undefined) {
      this.aex = args.aex;
    }
    if (args.dex !== undefined) {
      this.dex = args.dex;
    }
  }
};
radic.remote.RemoteRadic_runConsoleCommand_result.prototype = {};
radic.remote.RemoteRadic_runConsoleCommand_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.ConsoleCommand();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.aex = new ttypes.EAuthException();
        this.aex.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.dex = new ttypes.EDataException();
        this.dex.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

radic.remote.RemoteRadic_runConsoleCommand_result.prototype.write = function(output) {
  output.writeStructBegin('RemoteRadic_runConsoleCommand_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.aex !== null && this.aex !== undefined) {
    output.writeFieldBegin('aex', Thrift.Type.STRUCT, 1);
    this.aex.write(output);
    output.writeFieldEnd();
  }
  if (this.dex !== null && this.dex !== undefined) {
    output.writeFieldBegin('dex', Thrift.Type.STRUCT, 2);
    this.dex.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

radic.remote.RemoteRadicClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
radic.remote.RemoteRadicClient.prototype = {};
radic.remote.RemoteRadicClient.prototype.seqid = function() { return this._seqid; }
radic.remote.RemoteRadicClient.prototype.new_seqid = function() { return this._seqid += 1; }
radic.remote.RemoteRadicClient.prototype.runConsoleCommand = function(authString, command, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_runConsoleCommand(authString, command);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_runConsoleCommand(authString, command);
  }
};

radic.remote.RemoteRadicClient.prototype.send_runConsoleCommand = function(authString, command) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('runConsoleCommand', Thrift.MessageType.CALL, this.seqid());
  var args = new radic.remote.RemoteRadic_runConsoleCommand_args();
  args.authString = authString;
  args.command = command;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

radic.remote.RemoteRadicClient.prototype.recv_runConsoleCommand = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new radic.remote.RemoteRadic_runConsoleCommand_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.aex) {
    return callback(result.aex);
  }
  if (null !== result.dex) {
    return callback(result.dex);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('runConsoleCommand failed: unknown result');
};
radic.remote.RemoteRadicProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
radic.remote.RemoteRadicProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

radic.remote.RemoteRadicProcessor.prototype.process_runConsoleCommand = function(seqid, input, output) {
  var args = new radic.remote.RemoteRadic_runConsoleCommand_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.runConsoleCommand.length === 2) {
    Q.fcall(this._handler.runConsoleCommand, args.authString, args.command)
      .then(function(result) {
        var result = new radic.remote.RemoteRadic_runConsoleCommand_result({success: result});
        output.writeMessageBegin("runConsoleCommand", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new radic.remote.RemoteRadic_runConsoleCommand_result(err);
        output.writeMessageBegin("runConsoleCommand", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.runConsoleCommand(args.authString, args.command,  function (err, result) {
      var result = new radic.remote.RemoteRadic_runConsoleCommand_result((err != null ? err : {success: result}));
      output.writeMessageBegin("runConsoleCommand", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

