import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

interface CarouselProps {
  images: string[]; // Array of image URLs
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '200px', sm: '300px', md: '400px' },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          component="div"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentIndex === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        />
      ))}
    </Box>
  );
};

export default Carousel;
