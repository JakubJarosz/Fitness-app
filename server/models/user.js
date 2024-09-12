const mongoose = require("mongoose");
const {Schema} = mongoose

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required']
    },
    password: String,
    parameters: {
        age: {
            type: Number,
            required: false
        },
        gender: {
            type: String,
            required: false
        },
        goal: {
            type: String,
            required: false,
        },
        height: {
            type: Number,
            required: false
        },
        weight: {
            type: Number,
            required: false
        }
    }
})




const User = mongoose.model("User", userSchema);


module.exports = {User}