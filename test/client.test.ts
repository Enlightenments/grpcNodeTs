// import {
//   tran,
//   get_chain,
//   get_balance,
//   get_token_total_in, get_token_total_out,
//   get_txs,
//   get_block_by_height, get_block_by_hash,
//
// } from "../src/grpc-client/lib/rpc"
//
// import query from "../src/mysql/query"
// import pool from "../src/mysql/pool"
// import VerifyCodeModel from "../src/koa_app/model/VerifyCodeModel"

// test("get_chain", async () => {
//   let res = await get_chain();
//   console.log(res)
// });

// test("get_balance", async () => {

//   let res = await get_balance("test", "033307c92e4b80c7cad5e93669c41038");
//   console.log(res)
// });

// test("tran", async () => {
//   let res = await tran(
//     "d2269927ceb000d62d99596da43579460e1188425bb21559cd49b8bb1eae14a0",
//     "033307c92e4b80c7cad5e93669c41038",
//     "99a082d42094d8a63f361d4a394d7435",
//     "test",
//     "100"
//   );
//   console.log(res)
// });

// test("get_balance", async () => {

//   let res = await get_balance("test", "033307c92e4b80c7cad5e93669c41038");
//   console.log(res)
// });

// test("get_txs", async () => {

//   let res = await get_txs("test", "033307c92e4b80c7cad5e93669c41038");
//   console.log(JSON.parse(res.toString()))
// });



// test("mysql connect", async () => {
//   let id =1
//   let id2 =1
//   let res = await query("select * from user")
//   let res2 = await query("select * from user where id=?",[id])
//   console.log(res)
//   console.log(res2)
// });



// test("send_email", async () => {


//   let model = new VerifyCodeModel()
//   let res = await model.send_email("2329237005@qq.com","TEST","TEST")
//   console.log(res)
// });

// import {encrypt,decrypt,createKey} from "../src/crypto/test"
//
//
//
// test("rsa", async () => {
//   let data = { name: 'owen', age: 20 };
//   let encrypted = encrypt(data,"./pem/public.pem");
//   console.log('encrypted:', encrypted);
//
//   let decrypted = decrypt(encrypted,"./pem/private.pem");
//   console.log('decrypted:', decrypted);
//   // createKey()
// });

// import {json_rpc,STREAM} from "../src/grpc-server/lib/client";
//
// test("client", async () => {
//   // let res = await json_rpc("1","test","test");
//   // console.log(res)
//   STREAM.on("data",res=>{
//     console.log(res)
//   })
//   STREAM.on('end', ()=>{console.log("end");});
//   STREAM.on('error',()=>{console.log("stream error")});
//
// });


