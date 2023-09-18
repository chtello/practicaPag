const mongoose = require("mongoose");


const mascotaSchema = mongoose.Schema({
    nombre:String,
    descripcion: String
});
const Mascota =  mongoose.model("Mascota", mascotaSchema);

module.exports = Mascota;
