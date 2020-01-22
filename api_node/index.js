const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./connectConfiguration");
const {port} = require("./config");
const app = express();



app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => res.send({ error: true, message: "Funciona" }));

app.get("/books", (req, res) => {
  connectDB.query("select * from book", (error, result, fields) => {
    if (error) throw error;
    return res.send({ error: false, data: result, message: "Book List" });
  });
});

app.get("/book/:id", (req, res) => {
  let book_id = req.params.id;
  if (!book_id) {
    return res.status(400).send({
      error: true,
      message: "Please Provide Book ID"
    });
  }
  connectDB.query(
    "select * from book where id=?",
    book_id,
    (error, result, fields) => {
      if (error) throw error;
      return res.send({ error: false, data: result[0], message: "Book" });
    }
  );
});

app.post("/book", (req, res) => {
  let book = req.body;
  if (!book) {
    return res
      .status(400)
      .send({ error: true, message: "Please provide book" });
  }
  connectDB.query("insert into book set ? ", book, (error, result, fields) => {
    if (error) throw error;
    return res.send({
      error: false,
      data: result,
      message: "New Book has been create successfully"
    });
  });
});

app.put("/book", (req, res) => {
  let book_id = req.body.id;
  let book = req.body;

  if (!book_id || !book) {
    return res
      .status(400)
      .send({ error: book, message: "Please provide book and Book ID" });
  }
  connectDB.query(
    "UPDATE book SET ? WHERE id = ? ",
    [book, book_id],
    (error, result, fields) => {
      if (error) throw error;
      return res.send({
        error: false,
        data: result,
        message: "Book has been update successfully"
      });
    }
  );
});

app.delete("/book", (req, res) => {
  let book_id = req.body.id;
  if (!book_id) {
    return res
      .status(400)
      .send({ error: true, message: "Please provide Book" });
  }
  connectDB.query(
    "delete from book where id = ?",
    [book_id],
    (error, result, fields) => {
      if (error) throw error;
      return res.send({
        error: false,
        data: result,
        message: "Book has been deleted successfully"
      });
    }
  );
});

app.listen(port);
