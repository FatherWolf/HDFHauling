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
        Made in 2023
      </Typography>
    </Box>
  );
};

export default Footer;
