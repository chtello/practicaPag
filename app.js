const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri ="mongodb+srv://chtello:vKs2Y3mc4XdqwlNk@cluster0.cmh9c7z.mongodb.net/veterinaria?retryWrites=true&w=majority";
const port = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"))

app.use("/", require("./router/rutasWeb"))
app.use("/mascotas", require("./router/mascotas"))

mongoose.connect(uri,
    {useNewUrlParser:true,useUnifiedTopology:true})
    
    .then(console.log("Connected to database"))
    .catch((error)=>console.log("tienes un error, tu error es :" + error))

app.listen(port,()=>{
    console.log("listo")
});
