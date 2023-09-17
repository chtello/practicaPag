const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
    nombre:{type: String},
    descripcion:{type: String}
})


module.exports = mongoose.model("Mascota", mascotaSchema);
