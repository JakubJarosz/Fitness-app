import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Avatar} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LogOutButton from "../log-out-btn/LogOutButton"
import { useNavigate } from 'react-router-dom';
import { useSelector} from "react-redux"

function Navbar() {
  const navigate = useNavigate();
  const name = useSelector((state) => state.authuser.user.name);

  return (
    <div>
         <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Button color="inherit"  startIcon={<HomeIcon />} onClick={(() => navigate("/"))}>
              Home
            </Button>
            <Button color="inherit" startIcon={<AddBoxIcon />} onClick={(() => navigate("/parameters"))}>
              Create Parameters
            </Button>
            <Button color="inherit" startIcon={<FitnessCenterIcon />} onClick={(() => navigate("/create-plan"))}>
              Create Workout
            </Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ mr: 1 }}>User: {name}</Typography> {/* Optional username text */}
          <Avatar alt={name} src="/path/to/avatar.jpg" /> {/* Replace with your avatar path or use `src` prop */}
        </Box>
      </Toolbar>
      <LogOutButton/>
    </AppBar>
     
         </div>
  )
}

export default Navbar
