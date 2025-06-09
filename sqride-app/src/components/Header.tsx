import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import CustomHamburger from './hamburger'; // Import your custom component

const Header: React.FC = () => {
  // Optional: Handle drawer toggle or menu click if needed
  const handleMenuClick = () => {
    console.log('Menu clicked');
  };

  // Example cart items count - you can make this dynamic
  const cartItemsCount = 3;

  return (
    <AppBar 
      position="sticky" 
      color="default" 
      elevation={1}
      sx={{
        backgroundColor: 'white',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      }}
    >
      <Toolbar sx={{ py: 1 }}>
        {/* Left Side: Hamburger + Logo */}
        <IconButton 
          edge="start" 
          color="inherit" 
          aria-label="menu" 
          sx={{ 
            mr: 2,
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
          }}
        >
          <CustomHamburger onClick={handleMenuClick} />
        </IconButton>
        
        {/* Logo Image */}
        <Box
          component="img"
          src="/assets/logo/sq-logo.png" // Adjust path as needed
          alt="Logo"
          sx={{
            height: 40,  // Adjust height as needed
            cursor: 'pointer',
            mr: 2,
          }}
        />

        {/* Spacer to push right side icons */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Right Side: Cart and Login Icons */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton 
            aria-label="cart"
            sx={{
              backgroundColor: 'primary.light',
              color: 'primary.contrastText',
              borderRadius: '8px',
              p: 1.2,
              '&:hover': {
                backgroundColor: 'primary.main',
                transform: 'scale(1.05)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            <Badge 
              badgeContent={cartItemsCount} 
              color="error"
              sx={{
                '& .MuiBadge-badge': {
                  right: -4,
                  top: 4,
                  border: '2px solid white'
                }
              }}
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <IconButton 
            aria-label="login"
            sx={{
              backgroundColor: 'secondary.light',
              color: 'secondary.contrastText',
              borderRadius: '8px',
              p: 1.2,
              '&:hover': {
                backgroundColor: 'secondary.main',
                transform: 'scale(1.05)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;