import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        My Blog
      </Typography>
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/about">
        About
      </Button>
      <Button color="inherit" component={Link} to="/contact">
        Contact
      </Button>
      <Button color="inherit" component={Link} to="/preview">
        Preview
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
