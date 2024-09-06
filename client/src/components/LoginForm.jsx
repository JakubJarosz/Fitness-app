import React, {useState} from 'react'
import axios from "axios"

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const loginUser = (e) => {
    e.preventDefault()
    axios.get("/")
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
