import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: '#f5f5f5',
        marginTop: 'auto',
        borderTop: '1px solid #ddd',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        Property of HDF Hauling LLC. All rights reserved.
        <br />
        <a
          href="https://www.hdfhauling.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.hdfhauling.com
        </a>
        <br />
        Made in 2024 by CursedWardenLabs llc
      </Typography>
    </Box>
  );
};

export default Footer;
