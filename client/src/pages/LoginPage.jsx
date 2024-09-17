import React, {useState} from 'react'
import LoginForm from '../components/log-in/LoginForm'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import toast from 'react-hot-toast'

function LoginPage() {
 
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
      <LoginForm
      loginUser={loginUser}
      formData={formData}
      setFormData={setFormData}
      />
    </div>
  )
}

export default LoginPage
