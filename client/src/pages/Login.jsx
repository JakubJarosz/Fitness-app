import React from 'react'
import LoginForm from '../components/LoginForm'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <LoginForm/>
      <h2>Do you want to create account ?</h2>
      <button onClick={(() => {navigate("/register")})}>Click here to register</button>
    </div>
  )
}

export default Login
