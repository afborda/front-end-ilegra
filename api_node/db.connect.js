const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Brasil03",
  database: "tema9"
});
con.connect(err => {
  if (err) throw err;
});
module.exports = con;
