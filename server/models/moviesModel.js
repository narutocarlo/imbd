const mongoose = require("mongoose")

const MoiveSchema = new mongoose.Schema({
    items: [],
    errorMessage:""
})

module.exports = mongoose.model("movies",MoiveSchema)