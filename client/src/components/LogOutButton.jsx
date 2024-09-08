import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

function LogOutButton() {
    const navigate = useNavigate();
    const logOutBtn =  () => {
         axios.post("/logout");
        navigate("/register")
        toast.success("Logout was succesfull")
    }
  return (
    <div>
      <button onClick={logOutBtn}>Logout</button>
    </div>
  )
}

export default LogOutButton
