const User = require("../models/user")

const test = (req,res) => {
    res.json("test is working")
}

const registerUser = async (req,res) => {
    try {
        const {name, email, password} = req.body;
        // Check if name was entered
        if(!name) {
            return res.json({
                error: "name is required"
            })
        }
        // Check if password is good
        if(!password || password.length < 6) {
           return res.json({
            error: "Password is required and should be at least 6 characters long"
           }) 
        }
        // Check email
        const emialExist = await User.findOne({email})
        if (emialExist) {
            return res.json({
                error: "Email is taken aldready"
            })
        }
        const user = await User.create({
            name, email, password
        })

        return res.json(user)
    } catch (error) {
         console.log(error)
    }
}

module.exports = {
    test,
    registerUser
}