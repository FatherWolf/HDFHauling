import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ContactForm from '../components/Contactform';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        HDF Hauling
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is the home page of your React + TypeScript application. Explore
        other pages using the navigation bar above.
      </Typography>
      <Box mt={4}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/about"
          sx={{ marginRight: 2 }}
        >
          Learn More
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          component={Link}
          to="/contact"
        >
          Contact Us
        </Button>
      </Box>
      <Box mt={4}>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Home;
