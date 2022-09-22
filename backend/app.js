const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./routes/bookRoutes");

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);
// app.use('/', (req, res, next) =>{
//     res.send("This is Home Page.");
// })

mongoose.connect("mongodb+srv://maruf:maruf123@cluster0.rwbakxc.mongodb.net/myBookStore?retryWrites=true&w=majority")
.then(()=>{
    console.log("Database connection successful!");
})
.then(()=>{
    app.listen(8000);
})
.catch((err)=> console.log(err));