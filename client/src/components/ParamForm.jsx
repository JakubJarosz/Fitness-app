import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import { fetchUser } from '../redux/auth';



function ParamForm() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.authuser.user.id);
  
  useEffect(() => {
   dispatch(fetchUser())
  }, [])
  const [formData, setFormData] = useState({
    userId: '',
    age: "",
    gender: "",
    goal: "",
    height: "",
    weight: ""
  })

  const handleForm =  (e) => {
    e.preventDefault();
    setFormData({...formData, userId: id});
    console.log(formData)
  }

  
  return (
    <div>
      <form onSubmit={handleForm}>
        <label>Age:</label>
        <input type="number"   min="1" max="100" value={formData.age} onChange={(e)=> setFormData({...formData, age: e.target.value})}/><br></br>
        <label>Gender:</label>
    <input type="radio" />
    <label>Male</label>
    <input type="radio"/>
    <label>Female</label><br></br>
        <label>What is your goal?</label>
        <select name="goal" value={formData.goal} onChange={(e)=> setFormData({...formData, goal: e.target.value})}>
            <option value="lose">Lose weight</option>
            <option value="gain">Gain weight</option>
            <option value="maintain">Maintain weight</option>
        </select><br></br>
        <label>Height in cm:</label>
        <input type="number" value={formData.height} onChange={(e)=> setFormData({...formData, height: e.target.value})}/>
        <label>Weight in kg:</label>
        <input type="number" value={formData.weight} onChange={(e)=> setFormData({...formData, weight: e.target.value})}/><br></br>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ParamForm
