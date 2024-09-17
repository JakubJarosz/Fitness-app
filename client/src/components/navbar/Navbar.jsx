import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Avatar, useMediaQuery, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LogOutButton from "../log-out-btn/LogOutButton"
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
          <ul>
          <li>
              <Link to="/"><button>Home</button></Link>
            </li>
            <li>
              <Link to="/login"><LogOutButton/></Link>
            </li>
          </ul>
         </nav>
         <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Button color="inherit"  startIcon={<HomeIcon />}>
              Home
            </Button>
            <Button color="inherit" startIcon={<AddBoxIcon />}>
              Create Parameters
            </Button>
            <Button color="inherit" startIcon={<FitnessCenterIcon />}>
              Create Workout
            </Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ mr: 1 }}>User Name</Typography> {/* Optional username text */}
          <Avatar alt="User Name" src="/path/to/avatar.jpg" /> {/* Replace with your avatar path or use `src` prop */}
        </Box>
      </Toolbar>
    </AppBar>
     
         </div>
  )
}

export default Navbar
