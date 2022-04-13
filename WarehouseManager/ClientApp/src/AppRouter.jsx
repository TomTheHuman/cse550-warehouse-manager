import React, { useState } from 'react';
import {
  Routes, Route, useLocation, useNavigate,
} from 'react-router-dom';
import {
  AppBar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography,
} from '@mui/material';
import { Menu } from '@mui/icons-material';

// Auth
import { Box } from '@mui/system';

// Internal Components
import Login from './components/Login';
import Home from './components/Home';
import Inventory from './components/inventory/Inventory';
import Suppliers from './components/suppliers/Suppliers';
import Orders from './components/orders/Orders';
import Users from './components/users/Users';

import './styles/AppRouter.scss';

export default function AppRouter() {
  const [currentTitle, setCurrentTitle] = useState('');
  const [user, setUser] = useState({
    type: '',
  });
  const [drawer, toggleDrawer] = useState(false);

  const pages = [
    { name: 'Home', access: 'all' },
    { name: 'Inventory', access: 'all' },
    { name: 'Suppliers', access: 'admin' },
    { name: 'Orders', access: 'all' },
    { name: 'Users', access: 'admin' },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const handleDrawer = (event, open) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    toggleDrawer(open);
  };

  return (
    <div className="app-root">
      <Drawer
        anchor="left"
        open={drawer}
        onClose={(event) => handleDrawer(event, false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={(event) => handleDrawer(event, false)}
          onKeyDown={(event) => handleDrawer(event, false)}
        >
          <List>
            {pages.map((page) => (
              (user.type === page.access || page.access === 'all')
              && (
              <ListItem button key={page.name.toLocaleLowerCase()}>
                <ListItemText primary={page.name.toLocaleLowerCase()} />
              </ListItem>
              )
            ))}
          </List>
        </Box>
      </Drawer>
      <AppBar
        className={location.pathname === '/' ? 'appbar-hidden' : ''}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={(event) => handleDrawer(event, true)}
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
