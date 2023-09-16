const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();
const port = 3000;
app.use(express.static(__dirname + "/public"))

app.get("/", (req,res)=>{
    res.send("hola")
});
app.get("/404", (req,res)=>{
    res.send("hola")
});
app.listen(port,()=>{
    console.log("listo")
});