const mongoose = require("mongoose");
const {User} = require("../models/user");
const axios = require("axios")

// creating user parameters
const createParameters = async (req,res) => {
    const {age, gender, goal, height, weight} = req.body
    const userUpdate = await User.findByIdAndUpdate(req.user.id,
        {
            parameters: {
               age: age,
               gender: gender,
               goal: goal,
               height: height,
               weight: weight
            }
        }
    );
     if(userUpdate) {
        return res.json(userUpdate)
     } else {
        return res.json({
            error: "Error updating user body"
        })
     }

}

// GET API OF EXERICES

const getExerices = async (req, res) => {
  const {muscle} = req.query
  try {
   const response = await axios.get("https://api.api-ninjas.com/v1/exercises" , {
    params: {muscle},
    headers: {
        'X-Api-Key': process.env.API_EXERCISE
      },
   })
   res.json(response.data)
  } catch (err) {
    res.status(500).json({ err: 'Something went wrong!' });
  }
}

module.exports = {
    createParameters,
    getExerices
}