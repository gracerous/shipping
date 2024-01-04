import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@emotion/react';
import homeSection_bg_light from '../../images/homeSection_bg_light.svg';
import homeSection_bg_dark from '../../images/homeSection_bg_dark.svg';

export default function HomeSection({ minHeight }) {
  const theme = useTheme();
  const headerHeight = 80;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const offset = section.getBoundingClientRect().top - headerHeight;
      window.scrollTo({
        top: offset + window.scrollY,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box component={'section'} id='home'
      sx={{
        minHeight: { xs: '600px', md: minHeight },
        bgcolor: theme.palette.background.default,
        backgroundImage: theme.palette.mode === 'light' ? `url(${homeSection_bg_light})` : `url(${homeSection_bg_dark})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        backgroundPosition: 'bottom',
        backgroundPosition: 'center',
        justifyContent: 'center',
        '@media (max-width: 820px)': {
          backgroundImage: 'none',
        },
      }}
    >
      <Box sx={{ maxWidth: '750px', m: '0 auto 75px auto', color: theme.palette.text.primary, borderRadius: '20px', bgcolor: theme.palette.background.default }}>
        <Typography variant='h1' sx={{ mb: '75px' }}>
          ITIRO - we will find the way for you
        </Typography>
        <Typography variant='p'>
          We, ITIRO DMCC, are a shipping company operating in dry bulk cargoes market, with an extensive expertise in mineral fertilizers, coal and grains trasponsporation. Whether you need to carry  10,000 mt of 150,000 mt - we are here for you.
        </Typography>
      </Box>
      <Box>
        <Button sx={{ color: theme.palette.button.text}} variant='contained' onClick={() => scrollToSection('contact')}>Contact Us</Button>
      </Box>
    </Box>
  )
}
