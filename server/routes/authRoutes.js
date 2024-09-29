const express = require("express");
const router = express.Router();
const cors = require("cors");
const {test, registerUser, loginUser, getProfile, logOut} = require("../controllers/authControlles")
const jwt = require("jsonwebtoken");
const {createParameters, getExerices, createExercies, getCaloriesBurned, createActivities} = require("../controllers/userData")
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
//AUTH ROUTES
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logOut);
router.get("/profile", routAuth, getProfile);
//CREATING USER DATA ROUTES
router.post("/create-parameters",routAuth, createParameters)
router.get('/api/exercies', routAuth, getExerices);
router.post('/create-exercies', routAuth, createExercies)
router.get("/api/cardio", routAuth, getCaloriesBurned);
router.post("/create-cardio", routAuth, createActivities)


module.exports = router