import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const galleryData = [
  {
    image: '/assets/second-menu/cheezius-heart.jpeg',
    title: 'Delivering cheezy khushiyan',
  },
  {
    image: '/assets/second-menu/cheezius-rider.jpeg',
    title: 'Fastest Growing Brand of the Year',
  },
  {
    image: '/assets/second-menu/local-flavour.jpeg',
    title: 'Made with fresh, local ingredients and love',
  },
];

const GallerySection: React.FC = () => {
  return (
    <Box py={8} px={4} bgcolor="grey.100">
      <Typography variant="h4" align="center" gutterBottom>
        Our Specials
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {galleryData.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="350"
                image={item.image}
                alt={`Special ${index + 1}`}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ backgroundColor: 'transparent' }}>
                <Typography variant="body1" align="center" fontWeight={600}>
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GallerySection;
