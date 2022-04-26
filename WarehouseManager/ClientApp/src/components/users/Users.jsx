import React, { useEffect, useState } from 'react';
import { AddBox, Delete, Edit } from '@mui/icons-material';
import {
  Box, Button, Drawer, FormControl, FormLabel, Grid, IconButton, InputLabel, List,
  ListItem, ListItemText, MenuItem, Select, TextField,
} from '@mui/material';

import '../../styles/Users.scss';

// function getUsers() {
//   axios.get('https://localhost:3001/')
// }

export default function Users(props) {
  const [users, setUsers] = useState(null);
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState('');

  // Form Field State Values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('admin');
  const types = ['admin', 'user'];

  const { setTitle, baseUrl } = props;

  useEffect(() => {
    setTitle('Users');
    fetch(`${baseUrl}/api/GetUsers`)
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  function handleDelete() {
    setOpen(false);
  }

  function handleOpenDrawer(value) {
    setAction(value);
    setOpen(true);
  }

  function handleCloseDrawer() {
    setOpen(false);
    setAction('');
    setFirstName('');
    setLastName('');
    setUsername('');
    setPassword('');
    setAccountType(types[0].toLocaleUpperCase());
  }

  function handleSubmit() {
    if (action === 'edit') {
      fetch(`${baseUrl}/api/UpdateUser`, {
        method: 'PATCH',
        body: JSON.stringify({
          firstName,
          lastName,
          userName,
          passwordHash: password,
          accountType,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    } else if (action === 'add') {
      // TODO create object
    }
  }

  function handleEditUser(user) {
    console.log(users);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setUsername(user.userName);
    setPassword(user.passwordHash);
    setAccountType(user.accountType);
    setAction('edit');
    setOpen(true);
  }

  return (
    <Grid>
      <Box className="button-container">
        <Button
          className="button"
          variant="outlined"
          color="success"
          startIcon={<AddBox />}
          onClick={() => handleOpenDrawer('add')}
        >
          Add
        </Button>
      </Box>
      <Box className="data-grid-container">
        <List>
          {users
            && (users.map((user) => (
              <ListItem
                key={user.id}
                divider
                secondaryAction={(
                  <Box>
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      onClick={() => handleEditUser(user)}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDelete(user.id)}
                    >
                      <Delete />
                    </IconButton>
                  </Box>
            )}
              >
                <ListItemText
                  primary={`${user.firstName} ${user.lastName}`}
                  secondary={user.accountType.toLocaleUpperCase()}
                />
              </ListItem>
            )))}
        </List>
      </Box>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => handleCloseDrawer()}
        PaperProps={{
          sx: { width: '30vw' },
        }}
      >
        <form
          className="add-item-form"
        >
          <FormLabel>Add User</FormLabel>
          <TextField
            required
            type="text"
            className="form-input"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            required
            type="text"
            className="form-input"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            required
            type="text"
            className="form-input"
            label="Username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            required
            type="password"
            className="form-input"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControl>
            <InputLabel id="account-type-label">Account Type</InputLabel>
            <Select
              labelId="account-type-label"
              id="account-type"
              className="form-input"
              label="Account Type"
              value={accountType.toLocaleUpperCase()}
              onChange={(e) => setAccountType(e.target.value)}
            >
              {types.map((type) => (
                <MenuItem
                  key={type}
                  value={type.toLocaleUpperCase()}
                >
                  {type.toLocaleUpperCase()}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box
            container
            className="add-button-container"
          >
            <Button
              className="form-input"
              id="submit"
              type="submit"
              onClick={() => handleSubmit()}
              size="large"
              variant="contained"
            >
              {action === 'add' ? 'Add' : 'Save Changes'}
            </Button>
          </Box>
        </form>
      </Drawer>
    </Grid>
  );
}
