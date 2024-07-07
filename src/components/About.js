import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => (
  <Container>
    <Typography variant="h4" component="h1" gutterBottom>
      About Us
    </Typography>
    <Typography variant="body1">
      Welcome to My Blog. This is a simple blog application built with React and Material-UI. We aim to provide high-quality content on various topics.
    </Typography>
  </Container>
);

export default About;
