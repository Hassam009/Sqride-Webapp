// src/components/MenuSection.tsx
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const dummyMenu = [
  { id: 1, name: 'Pizza', description: 'Cheesy and delicious', image: 'https://source.unsplash.com/400x300/?pizza' },
  { id: 2, name: 'Burger', description: 'Juicy and tasty', image: 'https://source.unsplash.com/400x300/?burger' },
  { id: 3, name: 'Pasta', description: 'Italian delight', image: 'https://source.unsplash.com/400x300/?pasta' },
];

const MenuSection: React.FC = () => {
  return (
    <Box py={8} px={4}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Menu
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {dummyMenu.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <Button variant="contained" color="primary" sx={{ m: 2 }}>
                Order Now
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MenuSection;
