const express = require("express");
const router = express.Router();
const Mascota = require("../models/mascota");

router.get("/", async (req,res)=>{

    try {
    const arrayMascotasDB = await Mascota.find()
    console.log("hola" + arrayMascotasDB)

} catch (error) {
console.log(error)
}


res.render("mascotas",{
        arrayMascotas:[
            {id:"sdfghjk", descripcion:"mundo",nombre:"hola"},
            {id:"sdfghjk2", descripcion:"mundo2",nombre:"hola2"},
            {id:"sdfghjk3", descripcion:"mundo3",nombre:"hola3"},
            {id:"sdfghjk4", descripcion:"mundo4",nombre:"hola4"},
        ]
    })
})
module.exports = router;

