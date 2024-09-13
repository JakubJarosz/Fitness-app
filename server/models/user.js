const mongoose = require("mongoose");
const {Schema} = mongoose



const tasksItemSchema = new Schema({
    name: String,
    instruction: String
}, {_id: false});

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
    },
    exercies: {
        monday: [tasksItemSchema],
        tuesday: [tasksItemSchema],
        wednesday: [tasksItemSchema],
        thursday: [tasksItemSchema],
        friday: [tasksItemSchema],
        saturday: [tasksItemSchema],
        sunday: [tasksItemSchema],
    }
})




const User = mongoose.model("User", userSchema);


module.exports = {User}