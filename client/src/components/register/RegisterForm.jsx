import React from 'react'
import { CustomBox } from './RegisterForm.styled';
import { TextField, Button, Typography, Link, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'

function RegisterForm({registerUser,formData,setFormData}) {
 const navigate = useNavigate()
  return (
      <CustomBox
      component="form" 
      onSubmit={registerUser} 
      >
  <Typography variant="h5" sx={{ mb: 2 }}>
        Register
      </Typography>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={(e)=> setFormData({...formData, name: e.target.value})}
        fullWidth
        margin="normal"
      />
        <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={(e)=> setFormData({...formData, email: e.target.value})}
        fullWidth
        margin="normal"
      />
         <TextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={(e)=> setFormData({...formData, password: e.target.value})}
        fullWidth
        margin="normal"
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Register
      </Button>
      <Typography variant="body2"  sx={{ mt: 2 }}>
        Alredy have an account?{' '}
        <Link
         component="button"
         variant="body2"
         onClick={() => {
           navigate("/login");
         }}
        >
          Login
        </Link>
      </Typography>
      </CustomBox>
  )
}

export default RegisterForm
