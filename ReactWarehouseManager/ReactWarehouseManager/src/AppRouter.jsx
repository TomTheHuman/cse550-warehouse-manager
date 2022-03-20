import React, { useState } from 'react';
import {
  Routes, Route, useLocation, useNavigate,
} from 'react-router-dom';
import {
  AppBar, IconButton, Toolbar, Typography,
} from '@mui/material';
import { Menu } from '@mui/icons-material';

// Internal Components
import Login from './components/Login';
import Home from './components/Home';
import Inventory from './components/inventory/Inventory';
import Suppliers from './components/suppliers/Suppliers';
import Orders from './components/orders/Orders';
import Users from './components/users/Users';

export default function AppRouter() {
  const [currentTitle, setCurrentTitle] = useState('');
  const [user, setUser] = useState({
    type: '',
  });
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <AppBar
        className={location === '/' || 'appbar-hidden'}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            { currentTitle }
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'end' }}
          >
            { user.type.toLocaleUpperCase() }
          </Typography>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route
          path="/"
          element={(
            <Login
              navigate={navigate}
              setUser={setUser}
            />
          )}
        />
        <Route
          path="/home"
          element={(
            <Home
              navigate={navigate}
              setTitle={setCurrentTitle}
              user={user}
            />
          )}
        />
        <Route
          path="/inventory"
          element={(
            <Inventory
              navigate={navigate}
              setTitle={setCurrentTitle}
              user={user}
            />
          )}
        />
        <Route
          path="/suppliers"
          element={(
            <Suppliers
              navigate={navigate}
              setTitle={setCurrentTitle}
              user={user}
            />
          )}
        />
        <Route
          path="/orders"
          element={(
            <Orders
              navigate={navigate}
              setTitle={setCurrentTitle}
              user={user}
            />
          )}
        />
        <Route
          path="/users"
          element={(
            <Users
              navigate={navigate}
              setTitle={setCurrentTitle}
              user={user}
            />
          )}
        />
      </Routes>
    </div>
  );
}
