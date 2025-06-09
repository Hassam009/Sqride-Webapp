// src/components/SecondGallerySection.tsx
import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Button, 
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  useMediaQuery,
  useTheme
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

// Using your color scheme: 
// #8ECAE6, #219EBC, #023047, #FFB703, #FB8500

const RecommendationCard = styled(Card)(() => ({
  borderRadius: '12px',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15)',
    '& .dish-overlay': {
      opacity: 1,
    }
  }
}));

const DishOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(to top, rgba(2, 48, 71, 0.9) 0%, transparent 60%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: theme.spacing(2),
  opacity: 0,
  transition: 'opacity 0.3s ease',
  color: 'white',
}));

const FavoriteButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 10,
  right: 10,
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  color: theme.palette.error.main,
  '&:hover': {
    backgroundColor: 'white',
    color: theme.palette.error.dark,
  }
}));

const DetailDialog = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    borderRadius: '16px',
    overflow: 'hidden',
    maxWidth: '800px',
  },
}));

type Dish = {
  id: number;
  img: string;
  title: string;
  description: string;
  price: string;
  details: string;
  prepTime: string;
  calories: string;
  tags: string[];
};

const chefRecommendations: Dish[] = [
  {
    id: 1,
    img: 'https://source.unsplash.com/600x400/?chocolate-lava-cake',
    title: 'Molten Chocolate Lava Cake',
    description: 'Warm, decadent chocolate cake with a flowing molten center',
    price: '$9.99',
    details: 'Our signature dessert featuring rich Belgian chocolate. Served warm with a scoop of vanilla bean ice cream and fresh berries. The perfect balance of sweetness and richness that will satisfy any chocolate lover.',
    prepTime: '15 mins',
    calories: '480 cal',
    tags: ['Dessert', 'Vegetarian', 'Gluten-Free Option']
  },
  {
    id: 2,
    img: 'https://source.unsplash.com/600x400/?cocktail,mojito',
    title: 'Berry Bliss Mojito',
    description: 'Refreshing mint cocktail with mixed berries and lime',
    price: '$8.50',
    details: 'A summer favorite made with fresh mint, lime juice, mixed berries, and premium rum. Lightly sweetened with agave syrup and topped with club soda. Garnished with seasonal berries and mint sprigs.',
    prepTime: '5 mins',
    calories: '180 cal',
    tags: ['Cocktail', 'Vegan', 'Refreshing']
  },
  {
    id: 3,
    img: 'https://source.unsplash.com/600x400/?grilled-steak',
    title: 'Argentinian Ribeye Steak',
    description: 'Prime cut steak grilled to perfection with herb butter',
    price: '$29.99',
    details: '14oz USDA Prime ribeye steak, dry-aged for 28 days. Grilled over oak wood and finished with rosemary-thyme butter. Served with roasted garlic mashed potatoes and seasonal grilled vegetables.',
    prepTime: '25 mins',
    calories: '720 cal',
    tags: ['Main Course', 'Gluten-Free', 'Chef Special']
  },
  {
    id: 4,
    img: 'https://source.unsplash.com/600x400/?gourmet-salad',
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
    description: 'Fresh salad with quinoa, feta, olives, and lemon dressing',
    price: '$14.99',
    details: 'A nutritious blend of organic quinoa, cherry tomatoes, cucumber, Kalamata olives, red onion, and feta cheese. Tossed in our homemade lemon-herb vinaigrette. Topped with toasted pine nuts and fresh parsley.',
  const handleOpen = (dish: Dish) => {
    setSelectedDish(dish);
    setOpen(true);
  };
];

const SecondGallerySection: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<any>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = (dish: any) => {
    setSelectedDish(dish);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box 
      py={8} 
      px={isMobile ? 2 : 4} 
      sx={{ 
        background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, #FB8500 0%, #FFB703 100%)`
        }
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 700, 
              color: '#023047',
              position: 'relative',
              display: 'inline-block',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: '#FFB703',
                borderRadius: '2px'
              }
            }}
          >
            Chef's Recommendations
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              maxWidth: '700px', 
              margin: '20px auto 0', 
              color: '#219EBC',
              fontSize: '1.1rem'
            }}
          >
            Discover our most beloved dishes, carefully crafted by Chef Marco. Each recommendation 
            showcases our commitment to quality ingredients and exceptional flavors.
          </Typography>
        </Box>
        
        <Grid container spacing={isMobile ? 2 : 4} justifyContent="center">
          {chefRecommendations.map((dish) => (
            <Grid item key={dish.id} xs={12} sm={6} md={3}>
              <RecommendationCard>
                <FavoriteButton aria-label="add to favorites">
                  <FavoriteIcon />
                </FavoriteButton>
                <CardMedia 
                  component="img" 
                  height="250" 
                  image={dish.img} 
                  alt={dish.title} 
                />
                <DishOverlay className="dish-overlay">
                  <Typography variant="h6" fontWeight={600} sx={{ mb: 0.5 }}>
                    {dish.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1.5, opacity: 0.9 }}>
                    {dish.description}
                  </Typography>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" color="#FFB703">
                      {dish.price}
                    </Typography>
                    <Button 
                      variant="contained" 
                      size="small"
                      onClick={() => handleOpen(dish)}
                      sx={{
                        backgroundColor: '#FFB703',
                        color: '#023047',
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: '#FB8500'
                        }
                      }}
                    >
                      View Details
                    </Button>
                  </Box>
                </DishOverlay>
              </RecommendationCard>
              
              {/* Mobile content */}
              {isMobile && (
                <CardContent sx={{ backgroundColor: '#f5f5f5' }}>
                  <Typography variant="h6" fontWeight={600} color="#023047">
                    {dish.title}
                  </Typography>
                  <Typography variant="body2" color="#219EBC" sx={{ mb: 1 }}>
                    {dish.description}
                  </Typography>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" color="#FB8500">
                      {dish.price}
                    </Typography>
                    <Button 
                      variant="outlined" 
                      size="small"
                      onClick={() => handleOpen(dish)}
                      sx={{
                        borderColor: '#FFB703',
                        color: '#023047',
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: '#FFB703',
                          borderColor: '#FFB703'
                        }
                      }}
                    >
                      Details
                    </Button>
                  </Box>
                </CardContent>
              )}
            </Grid>
          ))}
        </Grid>
        
        <Box textAlign="center" mt={6}>
          <Button 
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#023047',
              color: 'white',
              fontWeight: 600,
              padding: '12px 36px',
              fontSize: '1.1rem',
              '&:hover': {
                backgroundColor: '#021f35',
                transform: 'translateY(-3px)'
              }
            }}
          >
            View Full Menu
          </Button>
        </Box>
      </Container>
      
      {/* Dish Detail Dialog */}
      <DetailDialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogContent sx={{ p: 0 }}>
          {selectedDish && (
            <Box>
              <CardMedia 
                component="img"
                height="350"
                image={selectedDish.img}
                alt={selectedDish.title}
                sx={{ width: '100%' }}
              />
              <Box p={4}>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                  <Box>
                    <Typography variant="h4" fontWeight={700} color="#023047">
                      {selectedDish.title}
                    </Typography>
                    <Typography variant="subtitle1" color="#219EBC" sx={{ mb: 2 }}>
                      {selectedDish.description}
                    </Typography>
                  </Box>
                  <Typography variant="h4" color="#FB8500">
                    {selectedDish.price}
                  </Typography>
                </Box>
                
                <Box my={3}>
                  <Typography variant="body1" paragraph>
                    {selectedDish.details}
                  </Typography>
                </Box>
                
                <Grid container spacing={2} mb={3}>
                  <Grid item xs={6}>
                    <Box display="flex" alignItems="center">
                      <Typography variant="body2" fontWeight={600} mr={1}>
                        Preparation Time:
                      </Typography>
                      <Typography variant="body2">
                        {selectedDish.prepTime}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box display="flex" alignItems="center">
                      <Typography variant="body2" fontWeight={600} mr={1}>
                        Calories:
                      </Typography>
                      <Typography variant="body2">
                        {selectedDish.calories}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                
                <Box display="flex" flexWrap="wrap" gap={1}>
                  {selectedDish.tags.map((tag: string, index: number) => (
                    <Box 
                      key={index}
                      sx={{
                        backgroundColor: '#FFB703',
                        color: '#023047',
                        px: 2,
                        py: 0.5,
                        borderRadius: '20px',
                        fontWeight: 600,
                        fontSize: '0.8rem'
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button 
            variant="outlined"
            onClick={handleClose}
            sx={{
              borderColor: '#023047',
              color: '#023047',
              fontWeight: 600,
              mr: 2
            }}
          >
            Back to Menu
          </Button>
          <Button 
            variant="contained"
            sx={{
              backgroundColor: '#023047',
              color: 'white',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#021f35'
              }
            }}
          >
            Add to Order
          </Button>
        </DialogActions>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#023047',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            '&:hover': {
              backgroundColor: 'white',
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </DetailDialog>
    </Box>
  );
};

export default SecondGallerySection;