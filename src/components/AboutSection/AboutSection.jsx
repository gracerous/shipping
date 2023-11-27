import React from 'react';
import { Box, Typography } from '@mui/material';
import aboutSection_bg_light from '../../images/aboutSection_bg_light.svg';
import aboutSection_bg_dark from '../../images/aboutSection_bg_dark.svg';
import portImg from '../../images/portImg.svg'
import { useTheme } from '@emotion/react';

const SeparatorText = ({ text, lastComponent, theme }) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Typography variant='p' sx={{ fontWeight: 500 }}>{text}</Typography>
    {lastComponent ? null :
      <Box
        sx={{
          content: '""',
          display: 'inline-block',
          width: '2px',
          height: '86px',
          bgcolor: theme.palette.text.hover,
          mx: '20px'
        }}
      />}
  </Box>
);

export default function AboutSection({ minHeight }) {
  const theme = useTheme();
  return (
    <Box component={'section'} id='about'
      sx={{
        minHeight: minHeight,
        bgcolor: 'red',
        bgcolor: theme.palette.background.default,
        backgroundImage: theme.palette.mode === 'light' ? `url(${aboutSection_bg_light})` : `url(${aboutSection_bg_dark})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        justifyContent: 'space-around',
        '@media (max-width: 1470px)': {
          justifyContent: 'flex-start',
        },
        '@media (max-width: 1280px)': {
          backgroundImage: 'none',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          maxWidth: '80%',
          justifyContent: 'space-around',
          textAlign: 'start',
        }}
      >
        <Box sx={{
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          bgcolor: theme.palette.background.default,
          color: theme.palette.text.primary,
          padding: '5px',
          borderRadius: '20px'
        }}>
          <Typography variant='h2' sx={{ mb: '30px' }}>ABOUT US</Typography>
          <Typography variant='p' >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias adipisci natus necessitatibus molestiae vero, eligendi iure in praesentium blanditiis facere?
          </Typography>
        </Box>
        <Box sx={{ width: '50%' }}>
          <img src={portImg} alt='port' width={'100%'} />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          bgcolor: theme.palette.background.default,
          color: theme.palette.text.primary,
          borderRadius: '20px',
          padding: '20px'
        }}
      >
        <Typography variant='h3'>Our commitment in action: prioritizing excellence in dry cargo shipping</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', my: '30px' }}>
          <SeparatorText theme={theme} text='Optimal Route Planning' />
          <SeparatorText theme={theme} text='Dedicated Customer Support' />
          <SeparatorText theme={theme} text='Sustainable Shipping Practices' />
          <SeparatorText text='Real-Time Transparency in Cargo Movement' lastComponent={true} />
        </Box>
        <Typography variant='p' sx={{ maxWidth: '1100px', textAlign: 'start' }}>
          We take pride in our commitment to excellence, focusing on the key priorities that set us apart. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
      </Box>
    </Box>
  )
}
