const mongoose = require("mongoose");
const {Schema} = mongoose



const tasksItemSchema = new Schema({
    name: String,
    instruction: String
}, {_id: false});

const activitySchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    stepsTaken: {
        type: Number,
        default: 0
    },
    workoutCompleted: {
        type: Boolean,
        default: false
    },
    workoutCaloriesBurned: {
        type: Number,
        default: 0
    },
    cardio: {
        type: String
    },
    cardioCaloriesBurned: {
        type: Number,
        default: 0
    },
    totalCaloriesBurned: {
        type: Number,
        default: 0
    }
})

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
            default: 0,
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
    },
    activities: [activitySchema]
})




const User = mongoose.model("User", userSchema);


module.exports = {User}