const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./connectConfiguration");
const { port } = require("./config");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

function checkBookIdExists(req, res, next) {
  console.log("Entrei nessa bagulho " + !!req.params.id);
  if (req.params.id) {
    return res.status(400).json({
      error: true,
      message: "Please Provide Book ID"
    });
  }
  return next();
}

app.get("/books", (req, res) => {
  connectDB.query("select * from book", (error, result, fields) => {
    if (error) throw error;
    return res.json({ error: false, data: result, message: "Book List" });
  });
});

app.get("/book/:id", checkBookIdExists, (req, res) => {
  const { id } = req.params;
  connectDB.query(`select * from book where id=${id}`, (error, result) => {
    if (error) throw error;
    return res.json({ error: false, data: result[0], message: "Book" });
  });
});

app.post("/book", (req, res) => {
  const book = req.body;
  if (!book) {
    return res
      .status(400)
      .json({ error: true, message: "Please provide book" });
  }
  connectDB.query("insert into book set ? ", book, (error, result, fields) => {
    if (error) throw error;
    return res.json({
      error: false,
      data: result,
      message: "New Book has been create successfully"
    });
  });
});

app.put("/book/:id", (req, res) => {
  const { id } = req.params;
  const book = req.body;

  if (!book) {
    return res
      .status(400)
      .json({ error: book, message: "Please provide book and Book ID" });
  }
  connectDB.query(
    `UPDATE book SET ? WHERE id = ${id} `,
    book,
    (error, result, fields) => {
      if (error) throw error;
      return res.json({
        error: false,
        data: result,
        message: "Book has been update successfully"
      });
    }
  );
});

app.delete("/book/:id", (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res
      .status(400)
      .json({ error: true, message: "Please provide Book" });
  }
  connectDB.query(`delete from book where id = ${id}`, (error, result) => {
    if (error) throw error;
    return res.json({
      error: false,
      data: result,
      message: "Book has been deleted successfully"
    });
  });
});

app.listen(port);
