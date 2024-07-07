import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => (
  <Container>
    <Typography variant="h4" component="h1" gutterBottom>
      Contact Us
    </Typography>
    <TextField label="Name" fullWidth margin="normal" />
    <TextField label="Email" fullWidth margin="normal" />
    <TextField label="Message" fullWidth margin="normal" multiline rows={4} />
    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
      Submit
    </Button>
  </Container>
);

export default Contact;
