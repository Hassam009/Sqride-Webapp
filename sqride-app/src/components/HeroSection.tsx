import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  '/assets/images/image.jpeg',
  '/assets/images/image2.jpeg',
  '/assets/images/image3.jpeg',
  '/assets/images/image4.jpeg',
    '/assets/images/image5.jpeg',
    '/assets/images/image6.jpeg',
  // Add more images if needed
];

const HeroSection: React.FC = () => {
 const settings = {
  dots: true,
  infinite: true,
  speed: 500,          // fade ka duration half second karo
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500, // images 1.5 second me change ho
  arrows: false,
  fade: true,
  cssEase: 'linear',
};



  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box
            key={index}
            sx={{
              height: '60vh', // reduced height
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src={src}
              alt={`Slide ${index + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // ensures the whole image fills without stretching
                filter: 'brightness(1.2)', // increases brightness
              }}
            />
            {/* Optional overlay */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgb(22 22 22 / 24%)', // optional dark overlay for readability
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSection;
