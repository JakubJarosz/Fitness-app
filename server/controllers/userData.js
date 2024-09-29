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

// GET API OF CALORIES BURNED

const getCaloriesBurned = async (req,res) => {
  const { activity, weight, duration} = req.query
  try {
    const response = await axios.get("https://api.api-ninjas.com/v1/caloriesburned" , {
      params: {activity, duration, weight},
      headers: {
          'X-Api-Key': process.env.API_EXERCISE
        },
     })
     res.json(response.data)
  } catch (err) {
    res.status(500).json({err: "Something went wrong", err})
  }
}

// CREATE CALORIES BURNED DATABASE
const createActivities = async (req,res) => {
  const {activities} = req.body;

  const calculateTotalCaloriesBurned = (stepsTaken, workoutCaloriesBurned, cardioCaloriesBurned) => {
    const caloriesPerStep = 0.045; // Average calories burned per step
    return (stepsTaken * caloriesPerStep) + workoutCaloriesBurned + cardioCaloriesBurned;
  };

      // Calculate total calories for the new activity data
      const totalCaloriesBurned = calculateTotalCaloriesBurned(
        activities.stepsTaken,
        activities.workoutCaloriesBurned,
        activities.cardioCaloriesBurned
      );

  const user = await User.findByIdAndUpdate(req.user.id,
    {
      $push: {
        activities: {
          date: activities.date,
          stepsTaken: activities.stepsTaken,
          workoutCompleted: activities.workoutCompleted,
          workoutCaloriesBurned: activities.workoutCaloriesBurned,
          cardio: activities.cardio,
          cardioCaloriesBurned: activities.cardio,
          totalCaloriesBurned: totalCaloriesBurned
        }
      }
    },
    {new: true}
  );
 if(user) {
  return res.json({message: "create activities successfull", user})
 } else {
  return res.json({error: "create activities not successfull"})
 }
}

module.exports = {
    createParameters,
    getExerices,
    createExercies,
    getCaloriesBurned,
    createActivities
}