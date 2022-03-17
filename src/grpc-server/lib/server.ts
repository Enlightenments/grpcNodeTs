import * as grpc from "@grpc/grpc-js";
import {sendUnaryData, ServerDuplexStream, ServerUnaryCall} from "@grpc/grpc-js/build/src/server-call";
import {IRpcServer, RpcService} from "../proto/rpc_grpc_pb";
import {RpcRequest, RpcResponse} from "../proto/rpc_pb";

class RpcServer implements IRpcServer {
    public jsonRpc(call: ServerUnaryCall<RpcRequest, RpcResponse>, callback: sendUnaryData<RpcResponse>): void {
        console.log(`${new Date().toISOString()}  json rpc,request:${call.metadata.get("token")}`);
        let token = call.metadata.get("token");

        if (token.toString() == "token123456") {
            let req = call.request;
            let res = new RpcResponse();
            res.setId(req.getId());
            res.setMethod(req.getMethod());
            res.setData(req.toString());
            callback(null, res);
        } else {
            callback(Error("token error"));
        }
    }

    public streamRpc(call: ServerDuplexStream<RpcRequest, RpcResponse>): void {
        console.log(`${new Date().toISOString()}  stream rpc,request:${call.metadata.get("token")}`);
        let all_rep = new RpcResponse()
        all_rep.setId("a").setMethod("a").setData("a")
        call.write(all_rep)
        call.on('data', (msg: RpcRequest) => {
            console.log("msg:" + msg);
            let res = new RpcResponse();
            res.setId(msg.getId());
            res.setMethod(msg.getMethod());

            res.setData("receive params:"+msg.getParams());
            call.write(res);
        });
        call.on('end', () => call.end());
    }
}

function server(ip:string,port: number): void {
    const server = new grpc.Server();
    // @ts-ignore
    server.addService(RpcService, new RpcServer());
    let cred = grpc.ServerCredentials.createInsecure();
    server.bindAsync(`${ip}:${port}`, cred, (err, port) => {
        if (err) {
            throw err;
        }
        console.log(`grpc server Listening on ${port}`);
        server.start();
    });
}

export default server;
