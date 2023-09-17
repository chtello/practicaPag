const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.render("index")
});
router.get("/404", (req,res)=>{
    res.render("404")
});
router.get("/servicios", (req,res)=>{
    res.render("servicios")
});
router.get("/mscotas", (req,res)=>{
    res.render("servicios")
});
module.exports = router;