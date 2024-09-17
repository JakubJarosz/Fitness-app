import React from 'react'
import { CustomBox } from './LoginForm.styled';
import { TextField, Button, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom'


function LoginForm({loginUser, formData, setFormData}) {
  const navigate = useNavigate();
  return (
      <CustomBox 
      component="form" 
      onSubmit={loginUser} 
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Login
      </Typography>
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
        Log In
      </Button>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Don't have an account?{' '}
        <Link
         component="button"
         variant="body2"
         onClick={() => {
           navigate("/register");
         }}
        >
          Register
        </Link>
      </Typography>
    </CustomBox>
  )
}

export default LoginForm
