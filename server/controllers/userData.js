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
  try {
    const activities = req.body;
    const user = await User.findById(req.user.id)

 // Calculates steps calories
    const calculateTotalCaloriesBurned = (stepsTaken, workoutCaloriesBurned, cardioCaloriesBurned) => {
      const caloriesPerStep = 0.045; 
      return (stepsTaken * caloriesPerStep) + workoutCaloriesBurned + cardioCaloriesBurned;
    };
  
    // Calculates total calories
        const totalCaloriesBurned = calculateTotalCaloriesBurned(
          activities.stepsTaken,
          activities.workoutCaloriesBurned,
          activities.cardioCaloriesBurned
        );
  
    // Check if activity with date already exist 
    const existDate = user.activities.find(activity => 
      activity.date.toISOString().split('T')[0] === activities.date
    )
    
   if (existDate) {
    await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          'activities.$[elem].stepsTaken': existDate.stepsTaken + activities.stepsTaken,
        }
      },
      {
        new: true,
        arrayFilters: [{'elem.date': activities.date}]
      }
    )
   }

     await User.findByIdAndUpdate(req.user.id,
      {
        $push: {
          activities: {
            date: activities.date,
            stepsTaken: activities.stepsTaken,
            workoutCompleted: activities.workoutCompleted,
            workoutCaloriesBurned: activities.workoutCaloriesBurned,
            cardio: activities.cardio,
            cardioCaloriesBurned: activities.cardioCaloriesBurned,
            totalCaloriesBurned: totalCaloriesBurned
          }
        }
      },
      {new: true}
    );

   return res.json("Success")
   
  } catch (err){
    return res.json("Fail")
  }
}

module.exports = {
    createParameters,
    getExerices,
    createExercies,
    getCaloriesBurned,
    createActivities
}