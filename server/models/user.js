const mongoose = require("mongoose");
const {Schema} = mongoose

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
})

const userParamsSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", require: true},
    age: {type: Number},
    gender: {type: String},
    goal: {type: String},
    height: {type: Number},
    weight: {type: Number}
})


const User = mongoose.model("User", userSchema);
const Params = mongoose.model("Params", userParamsSchema)


module.exports = {User, Params}