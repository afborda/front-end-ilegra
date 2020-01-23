const express = require("express");
const bodyParser = require("body-parser");
const { port } = require("./config");
const connectDB = require("./connectConfiguration");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(function(req, res, next) {
  req.connectDB = connectDB;
  next();
});

app.use("/", require("./src/routes"));

app.listen(port);
