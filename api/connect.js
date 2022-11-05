import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"80110847@ABman",
  database:"social",
  connectionLimit: 50,
  queueLimit: 0,
  waitForConnection: true
})
