import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactForm from '../components/Contactform';
import Carousel from '../components/Carousel';

// Import images from src folder
import cloudstruck from '../images/cloudstruck.jpeg';
import tankhaul from '../images/newtruck.png';
import twotruck from '../images/twotruckhaul.jpeg';
import nclogo from '../images/nclogo.jpg';

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
          At HDF Hauling, we partner with trucking fleets to maximize
          utilization and deliver every load on time. Our advanced fleet
          management streamline routes, maintenance, and compliance—boosting
          efficiency and profitability. Ready to grow? Lease on with HDF Hauling
          by filling out the form below.
        </Typography>
        <Box display={{ xs: 'block', md: 'flex' }} alignItems="center" mb={4}>
          <img
            src={nclogo}
            alt="nclogo"
            style={{
              maxWidth: '100%', // never wider than its container
              height: 'auto', // keep aspect ratio
            }}
          />
        </Box>

        <Box mt={4} width="100%" maxWidth="600px">
          <ContactForm />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
