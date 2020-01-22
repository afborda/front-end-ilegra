const express = require("express");
const bodyParser = require("body-parser");
const con = require("./db.connect");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => res.send({ error: true, message: "Funciona" }));

app.get("/book", (req, res) => {
  con.query("select * from book", (error, result, fields) => {
    if (error) throw error;
    return res.send({ error: false, data: result, message: "Book List" });
  });
});

app.get("/book/:id", (req, res) => {
  let user_id = req.params.id;
  if (!user_id) {
    return res.status(400).send({
      error: true,
      message: "Please Provide user_id"
    });
  }
  con.query(
    "select * from book where id=?",
    user_id,
    (error, result, fields) => {
      if (error) throw error;
      return res.send({ error: false, data: result[0], message: "User" });
    }
  );
});

app.post("/book", (req, res) => {
  let book = req.body.book;
  if (!book) {
    return res
      .status(400)
      .send({ error: true, message: "Please provide User" });
  }
  con.query("insert into book set ? ", { book }, (error, result, fields) => {
    if (error) throw error;
    return res.send({
      error: false,
      data: result,
      message: "New user has been create successfully"
    });
  });
});

app.listen(port, () => {
  console.log("node App is Running!");
});

module.exports = app;
