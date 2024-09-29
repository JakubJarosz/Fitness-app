import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Avatar, Menu, MenuItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TrackChangesIcon from '@mui/icons-material/TrackChanges'; // Import the Track Changes icon
import LogOutButton from "../log-out-btn/LogOutButton";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const name = useSelector((state) => state.authuser.user.name);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    navigate("/editprofile");
    handleMenuClose();
  };


  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Button color="inherit" startIcon={<HomeIcon />} onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" startIcon={<AddBoxIcon />} onClick={() => navigate("/parameters")}>
              Create Parameters
            </Button>
            <Button color="inherit" startIcon={<FitnessCenterIcon />} onClick={() => navigate("/create-plan")}>
              Create Workout
            </Button>
            <Button color="inherit" startIcon={<TrackChangesIcon />} onClick={() => navigate("/cardio")}>
              Track Calories
            </Button> {/* New Track Calories Button */}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ mr: 1 }}>User: {name}</Typography>
            <Avatar
              alt={name}
              src="/path/to/avatar.jpg" // Replace with the path to your avatar image
              onClick={handleAvatarClick}
              sx={{ cursor: 'pointer' }} // Makes avatar clickable
            />
          </Box>

          {/* Avatar dropdown menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <LogOutButton />
    </div>
  );
}

export default Navbar;