// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var rpc_pb = require('./rpc_pb.js');

function serialize_rpc_RpcRequest(arg) {
  if (!(arg instanceof rpc_pb.RpcRequest)) {
    throw new Error('Expected argument of type rpc.RpcRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_RpcRequest(buffer_arg) {
  return rpc_pb.RpcRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_RpcResponse(arg) {
  if (!(arg instanceof rpc_pb.RpcResponse)) {
    throw new Error('Expected argument of type rpc.RpcResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_RpcResponse(buffer_arg) {
  return rpc_pb.RpcResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RpcService = exports.RpcService = {
  jsonRpc: {
    path: '/rpc.Rpc/JsonRpc',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RpcRequest,
    responseType: rpc_pb.RpcResponse,
    requestSerialize: serialize_rpc_RpcRequest,
    requestDeserialize: deserialize_rpc_RpcRequest,
    responseSerialize: serialize_rpc_RpcResponse,
    responseDeserialize: deserialize_rpc_RpcResponse,
  },
  streamRpc: {
    path: '/rpc.Rpc/StreamRpc',
    requestStream: true,
    responseStream: true,
    requestType: rpc_pb.RpcRequest,
    responseType: rpc_pb.RpcResponse,
    requestSerialize: serialize_rpc_RpcRequest,
    requestDeserialize: deserialize_rpc_RpcRequest,
    responseSerialize: serialize_rpc_RpcResponse,
    responseDeserialize: deserialize_rpc_RpcResponse,
  },
};

exports.RpcClient = grpc.makeGenericClientConstructor(RpcService);
