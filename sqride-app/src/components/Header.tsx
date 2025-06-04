import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" color="default" elevation={2}>
      <Toolbar>
        {/* Left Side: Hamburger + Logo */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        
        {/* Logo Image */}
        <Box
          component="img"
          src="/assets/logo/sq-logo.png" // Adjust if file name or path is different
          alt="Logo"
          sx={{
            height: 40,  // adjust height as needed
            cursor: 'pointer',
            mr: 2,
          }}
        />

        {/* Spacer to push right side icons */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Right Side: Cart and Login Icons */}
        <Box>
          <IconButton color="inherit" aria-label="cart">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="login">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
