// src/components/LoginPage.tsx
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import DeliveryIcon from '@mui/icons-material/TwoWheeler';

const LoginPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Left Side (White) */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: 3,
          textAlign: 'center',
        }}
      >
        {/* Logo */}
        <Typography variant="h4" fontWeight="bold" color="#023047" mb={2}>
          Sqride
        </Typography>

        {/* Tagline */}
        <Typography variant="h5" fontWeight={600} mb={1}>
          Hey there, feeling hungry?
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          Let's enjoy your food with Sqride!
        </Typography>

        {/* Buttons */}
        <Button
          variant="contained"
          fullWidth
          startIcon={<DeliveryIcon />}
          sx={{
            backgroundColor: '#FFB703',
            color: '#000',
            fontWeight: 'bold',
            borderRadius: 10,
            py: 1.5,
            mb: 2,
            maxWidth: 300,
            '&:hover': {
              backgroundColor: '#FB8500',
            },
          }}
        >
          Continue with Phone
        </Button>

        <Button
          variant="outlined"
          fullWidth
          sx={{
            borderColor: '#219EBC',
            color: '#219EBC',
            fontWeight: 'bold',
            borderRadius: 10,
            py: 1.5,
            maxWidth: 300,
            '&:hover': {
              backgroundColor: '#E0F7FA',
              borderColor: '#023047',
              color: '#023047',
            },
          }}
        >
          Continue as a Guest
        </Button>
      </Box>

      {/* Right Side (Yellow with Image) */}
      <Box
        sx={{
          flex: 1,
        //   background: 'linear-gradient(to bottom right, #FFB703, #FB8500)',
          display: { xs: 'none', md: 'flex' }, // Hide on small screens
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Food Delivery Illustration */}
        <Box
          component="img"
          src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg" // Replace with your actual image path
          alt="Food delivery"
          sx={{
            width: '80%',
            height: 'auto',
            maxWidth: 500,
            objectFit: 'contain',
            animation: 'float 6s ease-in-out infinite',
            '@keyframes float': {
              '0%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-20px)' },
              '100%': { transform: 'translateY(0px)' },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default LoginPage;