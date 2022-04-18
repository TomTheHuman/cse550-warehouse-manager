import React, { useState } from 'react';
import {
  Button, Grid, TextField, Typography,
} from '@mui/material';
import { Warehouse } from '@mui/icons-material';

import '../styles/Login.scss';

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
    <Grid
      className="login-container"
      container
    >
      <form
        className="form-container"
      >
        <Grid className="form-title-container" container>
          <Warehouse fontSize="large" />
          <Typography
            className="form-title"
            variant="h1"
          >
            Warehouse Manager
          </Typography>
        </Grid>
        <TextField
          className="form-input"
          id="outline-basic"
          variant="filled"
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          className="form-input"
          id="outlined-basic"
          variant="filled"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="form-button"
          id="pasword-button"
          type="submit"
          onClick={() => handleLogin()}
          size="large"
          variant="contained"
        >
          Login
        </Button>
      </form>
    </Grid>
  );
}

export default Login;
