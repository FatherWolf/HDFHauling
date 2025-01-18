import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactForm from '../components/Contactform';
import Carousel from '../components/Carousel';

// Import images from src folder
import cloudstruck from '../images/cloudstruck.jpeg';
import tankhaul from '../images/tankhaul.jpeg';
import twotruck from '../images/twotruckhaul.jpeg';

const Home = () => {
  const images = [cloudstruck, tankhaul, twotruck]; // Use imported image paths

  return (
    <Box>
      {/* Carousel Section */}
      <Carousel images={images} />

      {/* Content Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 2,
          py: 4,
          background: 'black',
        }}
      >
        <Typography variant="h4" gutterBottom color="white">
          Welcome to HDF Hauling
        </Typography>

        <Typography variant="body1" gutterBottom color="white">
          USA Born and Raised based out of NC
        </Typography>

        <Box mt={4} width="100%" maxWidth="600px">
          <ContactForm />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
