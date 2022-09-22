const express = require('express');
const router = express.Router();

const {getAllBooks, addBook, getABook, updatedBook, deleteBook } = require("../controllers/bookController");



router.get("/", getAllBooks );
router.post("/",addBook);
router.get("/:id",getABook);
router.put("/:id",updatedBook)
router.delete("/:id",deleteBook)


module.exports = router;
