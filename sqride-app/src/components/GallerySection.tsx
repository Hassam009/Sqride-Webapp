// src/components/GallerySection.tsx
import React from 'react';
import { Box, Typography, Grid, Card, CardMedia } from '@mui/material';

const galleryImages = [
  'https://source.unsplash.com/400x300/?food1',
  'https://source.unsplash.com/400x300/?food2',
  'https://source.unsplash.com/400x300/?food3',
  'https://source.unsplash.com/400x300/?food4',
];

const GallerySection: React.FC = () => {
  return (
    <Box py={8} px={4} bgcolor="grey.100">
      <Typography variant="h4" align="center" gutterBottom>
        Our Specials
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {galleryImages.map((img, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card>
              <CardMedia component="img" height="200" image={img} alt={`Special ${index + 1}`} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GallerySection;
