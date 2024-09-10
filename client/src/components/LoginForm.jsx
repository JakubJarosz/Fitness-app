import React, {useState} from 'react'
import axios from "axios"
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const loginUser = async (e) => {
    e.preventDefault();
    const {email, password} = formData;
    try {
    const {data} = await axios.post("/login", {email, password})
    if (data.error) {
   toast.error(data.error)
    } else {
      setFormData({});
      toast.success("Login succesful. Welcome!");
      navigate("/")
    }
    } catch (error){
    console.log(error)
    }
  }
  return (
    <div>
        <form onSubmit={loginUser}>
        <label>Email</label>
        <input type='email' placeholder='enter email...' value={formData.email} onChange={(e)=> setFormData({...formData, email: e.target.value})}/>
        <label>Password</label>
        <input type='password' placeholder='enter password...' value={formData.password} onChange={(e)=> setFormData({...formData, password: e.target.value})}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm
