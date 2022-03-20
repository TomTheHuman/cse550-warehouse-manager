import React, { useState } from 'react';
import {
  Button, Grid, TextField, Typography,
} from '@mui/material';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /*
    TODO Write function to authenticate credentials with backend
    then fetch user information and set user in AppRouter state
  */
  function handleLogin() {
    const { setUser, navigate } = props;
    // Create and set user object when authenticated
    if (username.length > 0 && password.length > 0) {
      const currentUser = {
        username,
        password,
        type: 'admin',
      };
      setUser(currentUser);
      navigate('/home');
    }
  }

  return (
    <Grid container>
      <div
        className="login-container"
      >
        <Typography variant="h1">
          Warehouse Manager
        </Typography>
        <TextField
          className="login-input"
          id="outline-basic"
          variant="outlined"
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          className="login-input"
          id="outlined-basic"
          variant="outlined"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="login-button"
          id="pasword-button"
          type="submit"
          onClick={() => handleLogin()}
        >
          Login
        </Button>
      </div>
    </Grid>
  );
}

export default Login;
