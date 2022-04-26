import React, { useEffect, useState } from 'react';
import {
  Button, Grid, TextField, Typography,
} from '@mui/material';
import { Warehouse } from '@mui/icons-material';

import '../styles/Login.scss';

function Login(props) {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [incorrect, setIncorrect] = useState(false);
  const [users, setUsers] = useState([]);
  const { baseUrl } = props;

  useEffect(() => {
    fetch(`${baseUrl}/api/GetUsers`)
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  function handleLogin() {
    const { setUser, navigate } = props;
    // Create and set user object when authenticated
    if (userName.length > 0 && password.length > 0) {
      const userIndex = users.findIndex((user) => user.userName === userName);
      if (userIndex >= 0 && password === users[userIndex].passwordHash) {
        const currentUser = users[userIndex];
        setUser(currentUser);
        navigate('/home');
      } else {
        setIncorrect(true);
      }
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
          color={incorrect ? 'error' : undefined}
          id="outline-basic"
          variant="filled"
          label="Username"
          type="text"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          className="form-input"
          color={incorrect ? 'error' : undefined}
          id="outlined-basic"
          variant="filled"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {incorrect && <Typography variant="body1" color="error">Username or password incorrect.</Typography>}
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
