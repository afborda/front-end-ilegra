const mysql = require("mysql");
const { host, user, password, database } = require("./config");
const connectDB = mysql.createConnection({
  host,
  user,
  password,
  database
});
console.log(connectDB);
connectDB.connect(err => {
  if (err) throw err;
});
module.exports = connectDB;
