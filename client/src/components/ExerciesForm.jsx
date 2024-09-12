import React from 'react'
import axios from 'axios'

function ExerciesForm() {
  const muscle = "biceps"
  const fetchExercies = async() => {
    try {
      const response = await axios.get("/api/exercies" , {
        params: {muscle}
      })
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }
// const createApi = (muscle) => {
//     const baseURL = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`
//     return axios.create({
//         baseURL: baseURL
//     })
// }

//   const getExercies = async() => {
//     const api =  createApi("biceps")
//     try { 
//         const response = api.get()
//         console.log(response.data)
//     } catch (err) {
//        console.log(err)
//     }
//   }  
  return (
    <div>
      <button onClick={fetchExercies}>Search</button>
    </div>
  )
}

export default ExerciesForm
