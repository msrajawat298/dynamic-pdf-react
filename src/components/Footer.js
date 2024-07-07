import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => (
  <Box sx={{ p: 2, mt: 'auto', textAlign: 'center', bgcolor: 'background.paper' }}>
    <Typography variant="body1">
      © 2024 My Blog
    </Typography>
  </Box>
);

export default Footer;
