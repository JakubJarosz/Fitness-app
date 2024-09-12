import React, {useState} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function ParamForm() {
  const navigate = useNavigate();
 const [formData, setFormData] = useState({
  age: "",
  gender: "",
  goal: "",
  height: "",
  weight: ""
 })
  const createParameters = async (e) => {
    e.preventDefault();
    const {age, gender, goal, height, weight} = formData;
    try {
        const {data} = await axios.post("/create-parameters", {age,gender,goal,height,weight});
        if (data.error) {
         toast.error(data.error)
        } else {
          setFormData({});
          toast.success("Parameters created");
          navigate("/")
        }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <form onSubmit={createParameters}>
        <label>Age:</label>
        <input type="number"   min="1" max="100"  onChange={((e) => setFormData({...formData, age: e.target.value}))} required/><br></br>
        <label>Gender:</label>
    <input type="radio" name="gender" value="male" onChange={((e) => setFormData({...formData, gender: e.target.value}))} required/>
    <label>Male</label>
    <input type="radio" name="gender" value="female" onChange={((e) => setFormData({...formData, gender: e.target.value}))}/>
    <label>Female</label><br></br>
        <label>What is your goal?</label>
        <select name="goal"  required onChange={((e) => setFormData({...formData, goal: e.target.value}))}>
            <option value="lose">Lose weight</option>
            <option value="gain">Gain weight</option>
            <option value="maintain">Maintain weight</option>
        </select><br></br>
        <label>Height in cm:</label>
        <input type="number"  required onChange={((e) => setFormData({...formData, height: e.target.value}))}/>
        <label>Weight in kg:</label>
        <input type="number"  required onChange={((e) => setFormData({...formData, weight: e.target.value}))}/><br></br>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ParamForm
