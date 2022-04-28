const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        required: true,
        type:String,
    },
    password: {
        required: true,
        type:String,
    },
    email: {
        required: true,
        type:String,
        
    },
    movies:[]
})

module.exports = mongoose.model("Users",UserSchema)