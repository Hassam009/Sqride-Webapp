// src/components/SecondGallerySection.tsx
import React from 'react';
import { Box, Typography, Grid, Card, CardMedia } from '@mui/material';

const secondGalleryImages = [
  'https://source.unsplash.com/400x300/?dessert',
  'https://source.unsplash.com/400x300/?beverage',
  'https://source.unsplash.com/400x300/?steak',
  'https://source.unsplash.com/400x300/?salad',
];

const SecondGallerySection: React.FC = () => {
  return (
    <Box py={8} px={4}>
      <Typography variant="h4" align="center" gutterBottom>
        Chef's Recommendations
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {secondGalleryImages.map((img, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card>
              <CardMedia component="img" height="200" image={img} alt={`Recommendation ${index + 1}`} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SecondGallerySection;
