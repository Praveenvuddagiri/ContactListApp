import React, { useEffect, useState } from 'react';
import { Avatar, Box, Link, TextField, Checkbox, Button, FormControlLabel } from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import '../CSS/Login.css';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    if (localStorage.getItem("userName")) {
      navigate('/home');
    }
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", user);
    navigate('/home');
  }


  return (
    <div className='login'>
      <Avatar className="login__avatar">
        <VpnKeyIcon />
      </Avatar>
      <h1 className='login__head'>Sign in</h1>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="User Name"
          type="text"
          autoFocus
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className='login__button'
        >
          Sign In
        </Button>
        <div className='login__forgot'>
          <Link href="#" variant="body2">
            <u>Forgot password?</u>
          </Link>
          <Link href="#" variant="body2">
            <u>Don't have an account? Register Here</u>
          </Link>
        </div>
      </Box>
    </div>
  )
}

export default Login
