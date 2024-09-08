import React from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { logoutUser } from '../redux/auth';
import {useDispatch} from "react-redux"

function LogOutButton() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOutBtn =  () => {
         dispatch(logoutUser())
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
