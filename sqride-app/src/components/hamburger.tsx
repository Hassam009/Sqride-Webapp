// src/components/CustomHamburger.tsx
import React from 'react';
import { Box } from '@mui/material';

const CustomHamburger: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <Box 
      onClick={onClick}
      sx={{
        width: '30px',
        height: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
      }}
    >
      <Box sx={{
        height: '3px',
        width: '18px', // shorter top line
        backgroundColor: 'primary.main',
        borderRadius: '2px',
      }} />
      <Box sx={{
        height: '3px',
        width: '30px', // longest middle line
        backgroundColor: 'primary.main',
        borderRadius: '2px',
      }} />
      <Box sx={{
        height: '3px',
        width: '18px', // shorter bottom line
        backgroundColor: 'primary.main',
        borderRadius: '2px',
      }} />
    </Box>
  );
};

export default CustomHamburger;
