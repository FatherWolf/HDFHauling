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
        <Typography variant="body1" gutterBottom color="white">
          Proudly born and raised in the USA, with our roots firmly established
          in North Carolina.
          <br />
          <br />
          At HDF Hauling, our dispatching services reflect our unwavering
          commitment to excellence. We go above and beyond to deliver top-tier
          work, ensuring your trucking operations run smoothly, efficiently, and
          profitably. With us, you're not just getting a service—you're gaining
          a dedicated partner in your success.
        </Typography>

        <Box mt={4} width="100%" maxWidth="600px">
          <ContactForm />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
