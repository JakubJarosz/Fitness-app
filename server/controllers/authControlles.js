
const mongoose = require("mongoose");
const {User, Params} = require("../models/user");
const {hashPassword, comparePassword} = require("../helpers/bcryptAuth");
const jwt = require("jsonwebtoken");

const test = (req,res) => {
    res.json("test is working")
}

// Register user endpoint
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
        // Create user in Database
        const hashedPassword = await hashPassword(password)
        const user = await User.create({
            name, 
            email, 
            password: hashedPassword
        })

        return res.json(user)
    } catch (error) {
         console.log(error)
    }
}

// Login user endpoint 
const loginUser = async(req, res) => {
   try {
     const {email, password} = req.body
     // Check if user exist
     const user = await User.findOne({email})
     if (!user) {
        return res.json({
            error: "No user found"
        })
     }
     // Check if password match
     const passwordMatch = await comparePassword(password, user.password)
     if(passwordMatch) {
       jwt.sign({email: user.email, id: user._id, user: user.name}, process.env.JWT_SECRET, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json(user)

       })
     } else {
        res.json({
            error: "check password"
        })
     }
   } catch (error){
        console.log(error)
   }
}

const getProfile = (req, res) => {
   const {token} =   req.cookies
   if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
        if (err) throw err;
      return  res.json(user)
       
    })
   } else {
    res.json(null)
   }
   
}

const logOut = (req, res) => {
    res.clearCookie("token");
    res.json({
        message: "Logged out successfully"
    })
}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
    logOut
}