import mysql from "mysql"

var pool  = mysql.createPool({
    connectionLimit : 100,
    host            : '192.168.0.200',
    user            : 'root',
    password        : 'root',
    database        : 'wallet'
  });
  

export default pool