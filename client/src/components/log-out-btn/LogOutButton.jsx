import React from 'react'
import toast from 'react-hot-toast';
import { logoutUser } from '../../redux/authSlice';
import {useDispatch} from "react-redux"

function LogOutButton() {
    const dispatch = useDispatch();

    const logOutBtn =  () => {
         dispatch(logoutUser())
        toast.success("Logout was succesfull")
    }
  return (
    <div>
      <button onClick={logOutBtn}>Logout</button>
    </div>
  )
}

export default LogOutButton
