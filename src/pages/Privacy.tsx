import React from 'react';
import { Box, Typography } from '@mui/material';

const Privacy = () => {
  return (
    <Box
      sx={{
        padding: 4,
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'justify',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="body1" gutterBottom>
        At HDF Hauling LLC, your privacy is our priority. This Privacy Policy
        outlines how we collect, use, and protect your information when you use
        our website and services.
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Information We Collect
      </Typography>
      <Typography variant="body1" gutterBottom>
        - Personal Information: Name, email address, phone number, etc., when
        you register or contact us.
        <br />- Usage Data: Information about how you interact with our website,
        including IP addresses, browser type, and pages visited.
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        How We Use Your Information
      </Typography>
      <Typography variant="body1" gutterBottom>
        - To provide and maintain our services.
        <br />
        - To communicate with you regarding updates or inquiries.
        <br />- To improve our website and services through analytics.
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Data Protection
      </Typography>
      <Typography variant="body1" gutterBottom>
        We implement robust security measures to protect your data from
        unauthorized access, alteration, disclosure, or destruction. However, no
        method of transmission over the internet is 100% secure.
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Your Choices
      </Typography>
      <Typography variant="body1" gutterBottom>
        You have the right to access, update, or delete your personal
        information. Contact us if you wish to exercise these rights.
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1">
        If you have any questions about this Privacy Policy, please contact us
        at privacy@myapp.com.
      </Typography>
    </Box>
  );
};

export default Privacy;
