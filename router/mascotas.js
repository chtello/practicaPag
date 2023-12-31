const express = require("express");
const router = express.Router();
const Mascota = require("../models/mascota")

router.get("/", async (req,res)=>{

    try {
    const arrayMascotasDB = await Mascota.find()
    console.log(arrayMascotasDB)
    res.render("mascotas",{
        arrayMascotas: arrayMascotasDB
    })


} catch (error) {
console.log(error)
}
})



router.post("/", async (req,res)=>{
const body = req.body
try {
    const mascotasDB = new Mascota(body)
    await mascotasDB.save()
res.redirect("/mascotas")
} catch (error) {
    console.log(error)
}
});

module.exports = router;

