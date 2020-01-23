const express = require("express");
const router = express.Router();
const bookDataController = require("./controllers/BookController");

router.get("/books", bookDataController.index);
router.get("/book/:id", bookDataController.edit);
router.post("/book", bookDataController.store);
router.put("/book/:id", bookDataController.update);
router.delete("/book/:id", bookDataController.destroy);
module.exports = router;
