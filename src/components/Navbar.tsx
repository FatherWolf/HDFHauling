import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logohdf from '../images/logohdf.jpeg';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Privacy', path: '/privacy' },
    { text: 'Contact', path: '/contact' },
    { text: 'Dashboard', path: '/dashboard' },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link as React.ElementType}
            to={item.path}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* AppBar for Desktop and Mobile */}
      <AppBar style={{ background: 'red', color: 'black' }} position="static">
        <Toolbar>
          {/* Logo and Title */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img
              src={logohdf}
              alt="HDF Hauling Logo"
              style={{ height: '40px', marginRight: '10px' }}
            />
            <Typography variant="h6" component="div" sx={{ color: 'white' }}>
              HDF Hauling
            </Typography>
          </Box>

          {/* Full Menu for Desktop */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                color="inherit"
                key={item.text}
                component={Link}
                to={item.path}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Hamburger Menu Icon for Mobile */}
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // Improves performance on mobile
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
