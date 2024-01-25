import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import cuts from '../../Assets/photo-1551028150-64b9f398f678.avif';
import './header.css';

const HomePage = () => {
  return (
    <div className="header">
      <img className="headerImg" src={cuts} alt="" />
      <Container className="textContainer">
        <Typography variant="h4" gutterBottom>
          Welcome to Our Butchery!
        </Typography>
        <Typography variant="body1" paragraph>
          Explore our high-quality cuts of meat and place your order today.
        </Typography>
        <Button variant="contained" color="primary">
          View Products
        </Button>
      </Container>
    </div>
  );
};

export default HomePage;
