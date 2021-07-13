const mongoose = require("mongoose");


// schema

const Schema = mongoose.Schema;


// Create the UserAdmin
const userSchema = new Schema({
    nameAgence: {
        type : String,
        required: true,
        unique: true,
    },
    email: {
        type : String,
        required: true,
        unique: true,
    },
    password: {
        type : String,
        required: true,
    },
    role: {
        type : Number,
       
    },
})

module.exports = User = mongoose.model('User', userSchema)