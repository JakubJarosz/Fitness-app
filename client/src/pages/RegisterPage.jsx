import React, {useState} from 'react'
import RegisterForm from '../components/register/RegisterForm'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import toast from 'react-hot-toast'

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

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
      <RegisterForm
      registerUser={registerUser}
      formData={formData}
      setFormData={setFormData}
      />
    </div>
  )
}

export default RegisterPage
