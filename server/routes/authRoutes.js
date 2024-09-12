const express = require("express");
const router = express.Router();
const cors = require("cors");
const {test, registerUser, loginUser, getProfile, logOut, createParameters} = require("../controllers/authControlles")
const jwt = require("jsonwebtoken");

// middleware
router.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000"
    })
)
//auth routs 
const routAuth = (req,res,next) => {
    const {token} =  req.cookies
    if(!token) {
        return res.status(401).json({message: "Access denied. No token provided"})
    }
    try {
        const secretKey = process.env.JWT_SECRET;
       const decoded = jwt.verify(token, secretKey);
       req.user = decoded
        next();
    } catch {
       res.status(400).json({message: "Invalid token"})
    }
}


router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logOut);
router.get("/profile", routAuth, getProfile);
router.post("/create-parameters",routAuth, createParameters)


module.exports = router