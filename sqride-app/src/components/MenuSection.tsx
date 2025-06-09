// src/components/MenuSection.tsx
import React, { useEffect, useRef } from 'react';
import { Box, Typography, IconButton, Card, CardContent, CardMedia } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const menuItems = [
  { id: 1, name: 'CHEEZY TREATS', image: '/assets/Menu-images/image_1.jpeg' },
  { id: 2, name: 'PIZZA DEALS', image: '/assets/Menu-images/image_2.jpeg' },
  { id: 3, name: 'SANDWICHES & PLATTERS', image: '/assets/Menu-images/image_3.jpeg' },
  { id: 4, name: 'SPECIAL PIZZA', image: '/assets/Menu-images/image_7.jpeg' },
  { id: 5, name: 'BEVERAGES', image: '/assets/Menu-images/image_6.jpeg' },
  { id: 6, name: 'BEVERAGES', image: '/assets/Menu-images/image_7.jpeg' },
  { id: 7, name: 'BEVERAGES', image: '/assets/Menu-images/image_8.jpeg' },
  { id: 8, name: 'BEVERAGES', image: '/assets/Menu-images/image_9.jpeg' },
  { id: 9, name: 'BEVERAGES', image: '/assets/Menu-images/image_10.jpeg' },
  { id: 10, name: 'BEVERAGES', image: '/assets/Menu-images/image_11.jpeg' },
];

const MenuSection: React.FC = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  // Clone items to create seamless loop
  const clonedItems = [...menuItems, ...menuItems, ...menuItems];

  const scrollToPosition = (position: number, behavior: ScrollBehavior = 'smooth') => {
    if (!scrollContainer.current || isScrolling.current) return;
    
    isScrolling.current = true;
    scrollContainer.current.scrollTo({
      left: position,
      behavior,
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainer.current) return;

    const container = scrollContainer.current;
    const cardWidth = 220 + 24; // card width + gap
    const { scrollLeft, scrollWidth } = container;
    const middleSection = scrollWidth / 3;

    let newScrollLeft;

    if (direction === 'left') {
      newScrollLeft = scrollLeft - cardWidth;
      if (newScrollLeft <= middleSection - cardWidth * menuItems.length) {
        newScrollLeft = middleSection - cardWidth + (newScrollLeft - (middleSection - cardWidth * menuItems.length));
        scrollToPosition(newScrollLeft, 'auto');
        return;
      }
    } else {
      newScrollLeft = scrollLeft + cardWidth;
      if (newScrollLeft >= middleSection + cardWidth * menuItems.length) {
        newScrollLeft = middleSection - cardWidth + (newScrollLeft - (middleSection + cardWidth * menuItems.length));
        scrollToPosition(newScrollLeft, 'auto');
        return;
      }
    }

    scrollToPosition(newScrollLeft);
  };

  // Initialize scroll position to middle section
  useEffect(() => {
    if (scrollContainer.current) {
      const cardWidth = 220 + 24;
      const middleSection = (scrollContainer.current.scrollWidth / 3) + (cardWidth * menuItems.length);
      scrollContainer.current.scrollLeft = middleSection;
    }
  }, []);

  return (
    <Box py={6} display="flex" justifyContent="center" bgcolor="#f9f9f9">
      <Box width="90%" maxWidth="1200px" position="relative">
        <Typography 
          variant="h4" 
          gutterBottom 
          textAlign="center" 
          fontWeight="bold"
          color="primary.main"
          mb={4}
        >
          Explore Our Menu
        </Typography>

        {/* Arrow Buttons */}
        <IconButton
          onClick={() => scroll('left')}
          sx={{
            position: 'absolute',
            top: 'calc(50% + 20px)',
            left: { xs: -10, md: -20 },
            transform: 'translateY(-50%)',
            backgroundColor: 'background.paper',
            boxShadow: 3,
            zIndex: 1,
            '&:hover': { backgroundColor: 'action.hover' },
            display: { xs: 'none', sm: 'flex' }
          }}
        >
          <ArrowBackIosIcon fontSize="small" />
        </IconButton>
        <IconButton
          onClick={() => scroll('right')}
          sx={{
            position: 'absolute',
            top: 'calc(50% + 20px)',
            right: { xs: -10, md: -20 },
            transform: 'translateY(-50%)',
            backgroundColor: 'background.paper',
            boxShadow: 3,
            zIndex: 1,
            '&:hover': { backgroundColor: 'action.hover' },
            display: { xs: 'none', sm: 'flex' }
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>

        {/* Scrollable Menu */}
        <Box
          ref={scrollContainer}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 3,
            py: 2,
            px: 1,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {clonedItems.map((item, index) => (
            <Card
              key={`${item.id}-${index}`}
              sx={{
                minWidth: 200,
                width: 220,
                borderRadius: 2,
                border: 'none',
                boxShadow: 3,
                textAlign: 'center',
                flex: '0 0 auto',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { 
                  transform: 'translateY(-5px)',
                  boxShadow: 6
                },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={item.image}
                alt={item.name}
                sx={{
                  objectFit: 'cover',
                  borderBottom: '2px solid',
                  borderColor: 'primary.main',
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
              <CardContent sx={{ py: 2 }}>
                <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MenuSection;
