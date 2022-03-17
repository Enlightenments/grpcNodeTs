import * as grpc from '@grpc/grpc-js';
import {ServerDuplexStream} from "_@grpc_grpc-js@1.3.2@@grpc/grpc-js/build/src/server-call";
import {RpcClient} from "../proto/rpc_grpc_pb"
import {RpcRequest,RpcResponse} from '../proto/rpc_pb';
import { Metadata } from '@grpc/grpc-js';

const client = new RpcClient(
    "127.0.0.1:3333",
    grpc.credentials.createInsecure(),

)

const STREAM = client.streamRpc()

function json_rpc(id:string,method:string,params:string): Promise<String>{
    let req = new RpcRequest();
    req.setId(id).setMethod(method).setParams(params)
    let metadata = new Metadata()
    metadata.set("token","token123456")
    return new Promise<String>((resolve, reject) => {
        client.jsonRpc(req, metadata,(err, rep) => {
            if (err) {
                return reject(err)
            }
            return resolve(rep.getData())
        })
    });
}

// function send_stream(id:string,method:string,params:string): Promise<any>{
//     let req = new RpcRequest();
//     req.setId(id).setMethod(method).setParams(params)
//     return new Promise(async (resolve, reject) => {
//         STREAM.write(req)
//         // STREAM.on('data',res => {
//         //     resolve(res)
//         // });
//         // STREAM.on('end', ()=>{});
//         // STREAM.on('error',()=>{reject("stream error")});
//     });
// }



export {
    STREAM,
    json_rpc,
}
