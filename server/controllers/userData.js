const mongoose = require("mongoose");
const {User} = require("../models/user");
const axios = require("axios")

// creating user parameters in database
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

// CREATE EXERICE DATABASE

const createExercies = async (req,res) => {
  const {tasks} = req.body
  const userUpdate = await User.findByIdAndUpdate(req.user.id, 
    {
      exercies: {
        monday: tasks.monday,
        tuesday: tasks.tuesday,
        wednesday: tasks.wednesday,
        thursday: tasks.thursday,
        friday: tasks.friday,
        saturday: tasks.saturday,
        sunday: tasks.sunday
      }
    }
  )
  if (userUpdate) {
    return res.json(tasks) 
  } else {
    return res.json({
      error: "Error creating exercise plan"
  })
  }
  
}

module.exports = {
    createParameters,
    getExerices,
    createExercies
}