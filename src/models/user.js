const mongoose = require('mongoose')
const { Schema } = mongoose
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName : {
        type: String,
        required: true,
        unique: true
    },
    password: {
     type: String,
     required: true
    },
    role: {
        type: String,
        enum: ['regular', 'admin'],
        default: "regular"
    }
})

module.exports = mongoose.model("User", userSchema)