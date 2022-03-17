import RSA from "node-rsa"
import fs from "fs"



const publicKeyPath='./pem/public.pem'
const privateKeyPath='./pem/private.pem'


function createKey(){
  var key = new RSA({ b: 2048});
  key.setOptions({ encryptionScheme: 'pkcs1' })
  const publicKey=key.exportKey('public')
    fs.writeFile(publicKeyPath,publicKey,(err)=>{
        if(err) throw err
        console.log('公钥已保存')
    })
    const privateKey=key.exportKey('private')
    fs.writeFile(privateKeyPath,privateKey,(err)=>{
        if(err) throw err
        console.log('私钥已保存')
    })

}

function encrypt(data:any,pubKeyPath:string) {
    let pubKey = fs.readFileSync(pubKeyPath,'utf8')
    const nodersa = new RSA(pubKey);
    const encrypted = nodersa.encrypt(data, 'base64');
    return encrypted;
}

function decrypt(data:any,priKeyPath:string) {
    let priKey = fs.readFileSync(priKeyPath,'utf8')
    const nodersa = new RSA(priKey);
    const decrypted = nodersa.decrypt(data, 'utf8');
    return decrypted;
}


export {
    encrypt,decrypt,createKey
}



