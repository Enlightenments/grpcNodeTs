// package: rpc
// file: rpc.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as rpc_pb from "./rpc_pb";

interface IRpcService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    jsonRpc: IRpcService_IJsonRpc;
    streamRpc: IRpcService_IStreamRpc;
}

interface IRpcService_IJsonRpc extends grpc.MethodDefinition<rpc_pb.RpcRequest, rpc_pb.RpcResponse> {
    path: "/rpc.Rpc/JsonRpc";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<rpc_pb.RpcRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.RpcRequest>;
    responseSerialize: grpc.serialize<rpc_pb.RpcResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.RpcResponse>;
}
interface IRpcService_IStreamRpc extends grpc.MethodDefinition<rpc_pb.RpcRequest, rpc_pb.RpcResponse> {
    path: "/rpc.Rpc/StreamRpc";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<rpc_pb.RpcRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.RpcRequest>;
    responseSerialize: grpc.serialize<rpc_pb.RpcResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.RpcResponse>;
}

export const RpcService: IRpcService;

export interface IRpcServer {
    jsonRpc: grpc.handleUnaryCall<rpc_pb.RpcRequest, rpc_pb.RpcResponse>;
    streamRpc: grpc.handleBidiStreamingCall<rpc_pb.RpcRequest, rpc_pb.RpcResponse>;
}

export interface IRpcClient {
    jsonRpc(request: rpc_pb.RpcRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.RpcResponse) => void): grpc.ClientUnaryCall;
    jsonRpc(request: rpc_pb.RpcRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.RpcResponse) => void): grpc.ClientUnaryCall;
    jsonRpc(request: rpc_pb.RpcRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.RpcResponse) => void): grpc.ClientUnaryCall;
    streamRpc(): grpc.ClientDuplexStream<rpc_pb.RpcRequest, rpc_pb.RpcResponse>;
    streamRpc(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<rpc_pb.RpcRequest, rpc_pb.RpcResponse>;
    streamRpc(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<rpc_pb.RpcRequest, rpc_pb.RpcResponse>;
}

export class RpcClient extends grpc.Client implements IRpcClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public jsonRpc(request: rpc_pb.RpcRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.RpcResponse) => void): grpc.ClientUnaryCall;
    public jsonRpc(request: rpc_pb.RpcRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.RpcResponse) => void): grpc.ClientUnaryCall;
    public jsonRpc(request: rpc_pb.RpcRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.RpcResponse) => void): grpc.ClientUnaryCall;
    public streamRpc(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<rpc_pb.RpcRequest, rpc_pb.RpcResponse>;
    public streamRpc(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<rpc_pb.RpcRequest, rpc_pb.RpcResponse>;
}
