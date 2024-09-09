const {Params, User} = require("../models/user");



const createuserParams = async (req,res) => {
    try {
        const {userId, age, gender, goal, height, weight} = req.body;
        const user = await User.findOne({userId});
        if (!user) {
         return res.status(404).json({message: "User not found", userId})
        }
        const userParams = await Params.create({
         userId,
         age: age,
         gender: gender,
         goal:goal,
         height: height,
         weight: weight
        })
        return res.json(userParams)
    } catch (error){
 console.log(error)
    }
 
}

module.exports = {
    createuserParams,
    
}