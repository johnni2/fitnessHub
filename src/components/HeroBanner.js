import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '10px', xs: '50px' }, ml: { sm: '50px' }}} position="relative" p="0px">
    <Typography fontWeight={700} color="#000000" sx={{ opacity: '0.7', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Fitness
    </Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="20px" mt="-10px">
      Realize Your <br />
      True Potential
    </Typography>
    <Stack  
      direction="row"
      justifyContent="left"
      alignItems="center"
      spacing={0}>
      <a href="#exercises" style={{ textDecoration: 'none', width: '200px', textAlign: 'center', background: 'black', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '50px' }}>Explore Exercises</a>    
      <a href="#exercises" style={{ textDecoration: 'none', width: '200px', textAlign: 'center', background: 'white', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'black', borderRadius: '50px' }}>Daily Challenge</a>    
    </Stack>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" 
      style={{ width: '500px', height: '500px', position: 'absolute', top: '400px', right: '100px', bottom: '80px'}} />
  </Box>
);

export default HeroBanner;
