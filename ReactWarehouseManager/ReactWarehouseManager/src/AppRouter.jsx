import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  function handlePageTitle(pageTitle) {
    setCurrentTitle(pageTitle);
  }

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
        </Toolbar>
      </AppBar>
      <Routes>
        <Route
          path="/"
          element={<Login setTitle={() => handlePageTitle()} />}
        />
        <Route
          path="/home"
          element={<Home setTitle={() => handlePageTitle()} />}
        />
        <Route
          path="/inventory"
          element={<Inventory setTitle={() => handlePageTitle()} />}
        />
        <Route
          path="/suppliers"
          element={<Suppliers setTitle={() => handlePageTitle()} />}
        />
        <Route
          path="/orders"
          element={<Orders setTitle={() => handlePageTitle()} />}
        />
        <Route
          path="/users"
          element={<Users setTitle={() => handlePageTitle()} />}
        />
      </Routes>
    </div>
  );
}
