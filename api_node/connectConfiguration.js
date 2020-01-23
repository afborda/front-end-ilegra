const mysql = require("mysql");
const { host, user, password, database } = require("./config");
const connectDB = mysql.createConnection({
  host,
  user,
  password,
  database
});
connectDB.connect(err => {
  if (err) throw err;
});
module.exports = connectDB;
