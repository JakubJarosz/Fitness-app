import React from 'react'
import toast from 'react-hot-toast';
import { logoutUser } from '../../redux/authSlice';
import {useDispatch} from "react-redux"
import LogoutIcon from '@mui/icons-material/Logout';
import { Fab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LogOutButton() {
  const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOutBtn =  () => {
         dispatch(logoutUser())
        toast.success("Logout was succesfull")
        navigate("/login")
    }
  return (
      <Fab
      color="primary"
      aria-label="logout"
      onClick={logOutBtn}
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
      }}
    >
      <LogoutIcon />
    </Fab>
  )
}

export default LogOutButton
