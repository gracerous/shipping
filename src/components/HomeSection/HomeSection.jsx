import { Box, Typography } from '@mui/material';
import React from 'react';
import ActionButton from '../ActionButton/ActionButton';
import { useTheme } from '@emotion/react';
import homeSection_bg_light from '../../images/homeSection_bg_light.svg';
import homeSection_bg_dark from '../../images/homeSection_bg_dark.svg';
import { useSelector } from 'react-redux';

export default function HomeSection({ minHeight }) {
  const theme = useTheme();
  const headerHeight = 80;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const offset = section.getBoundingClientRect().top + headerHeight;
      window.scrollTo({
        top: offset + window.scrollY,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box component={'section'} id='home'
      sx={{
        minHeight: minHeight,
        bgcolor: theme.palette.background.default,
        backgroundImage: theme.palette.mode === 'light' ? `url(${homeSection_bg_light})` : `url(${homeSection_bg_dark})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        backgroundPosition: 'bottom',
        backgroundPosition: 'center',
        justifyContent: 'center'
      }}
    >
      <Box sx={{ maxWidth: '750px', m: '0 auto 75px auto', color: theme.palette.text.primary, borderRadius: '20px', bgcolor: theme.palette.background.default }}>
        <Typography variant='h1' sx={{ fontSize: '4.5rem', mb: '75px' }}>Home page Lorem ipsum dolor sit amet.</Typography>
        <Typography variant='p'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, quidem earum voluptatibus officia maiores pariatur culpa nulla reprehenderit atque aspernatur repellat est ipsam quibusdam, perferendis deleniti quia adipisci dolorum ut!
        </Typography>
      </Box>
      <Box>
        <ActionButton content={'Contact Us'}
          action={() => scrollToSection('contact')} />
      </Box>
    </Box>
  )
}
