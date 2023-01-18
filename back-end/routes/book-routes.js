const express = require("express");
const router = express.Router();
const {getAllBooks, addBook, getSpecificBook, updateBook, deleteBook} = require("../controllers/booksController");

router.get("/", getAllBooks);
router.post("/", addBook);
router.get("/:id", getSpecificBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;