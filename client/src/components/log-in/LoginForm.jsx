import React from 'react'
import { TextField, Button, Box, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom'


function LoginForm({loginUser, formData, setFormData}) {
  const navigate = useNavigate();
  return (
      <Box 
      component="form" 
      onSubmit={loginUser} 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 5,
        mx: 'auto',
        width: 300,
        padding: 3,
        border: '1px solid #ccc',
        borderRadius: '8px'
      }}
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
    </Box>
  )
}

export default LoginForm
