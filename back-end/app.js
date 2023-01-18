const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./routes/book-routes");

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);

//Cloud DB Connection.
mongoose.connect("mongodb+srv://admin:oqKb0mVpfrFNtcE9@cluster0.unwhrea.mongodb.net/myDB?retryWrites=true&w=majority")
.then(()=> console.log("Connected To Database"))
.then(()=> app.listen(5000))
.catch((err)=> console.log(err));