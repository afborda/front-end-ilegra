const BookData = require("../model/bookData");

module.exports = {
  index: function(req, res) {
    BookData.get(req.connectDB, function(err, rows) {
      res.json({ error: err, data: rows, message: "Book List" });
    });
  },

  store: function(req, res) {
    BookData.create(req.connectDB, req.body, function(err, rows) {
      res.json({ error: err, data: rows, message: "OK" });
    });
  },
  edit: function(req, res) {
    BookData.getById(req.connectDB, req.params.id, function(err, rows) {
      res.json({ error: err, data: rows[0], message: "Book" });
    });
  },
  update: function(req, res) {
    BookData.update(req.connectDB, req.body, req.params.id, function(err) {
      res.json({ error: err, data: rows[0], message: "OK" });
    });
  },
  destroy: function(req, res) {
    BookData.destroy(req.connectDB, req.params.id, function(err) {
      res.json({ error: err, message: "OK" });
    });
  }
};
