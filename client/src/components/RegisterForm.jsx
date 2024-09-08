import React, {useState} from 'react'
import axios from "axios"
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
   console.log(formData)
  const registerUser = async (e) => {
     e.preventDefault();
     const {name, email, password} = formData;
     try {
      const {data} = await axios.post("/register" , { name, email, password})
       if(data.error) {
        toast.error(data.error)
       } else {
        setFormData({});
        toast.success("Register succesful. Welcome!");
        navigate("/login")
       }
     } catch (err) {
       console.log(err)
     }
  }

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type='text' placeholder='enter name...' value={formData.name} onChange={(e)=> setFormData({...formData, name: e.target.value})}/>
        <label>Email</label>
        <input type='email' placeholder='enter email...' value={formData.email} onChange={(e)=> setFormData({...formData, email: e.target.value})}/>
        <label>Password</label>
        <input type='password' placeholder='enter password...' value={formData.password} onChange={(e)=> setFormData({...formData, password: e.target.value})}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default RegisterForm
