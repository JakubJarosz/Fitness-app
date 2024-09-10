import React from 'react'
import RegisterForm from '../components/RegisterForm'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Register PAGE</h1>
      <RegisterForm/>
      <h2>You already have account ?</h2>
      <button onClick={(() => {navigate("/login")})}>Click here to log in</button>
    </div>
  )
}

export default Register
