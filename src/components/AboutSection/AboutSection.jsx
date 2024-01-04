import React from 'react';
import { Box, Typography } from '@mui/material';
import aboutSection_bg_light from '../../images/aboutSection_bg_light.svg';
import aboutSection_bg_dark from '../../images/aboutSection_bg_dark.svg';
import portImg from '../../images/portImg.svg';
import { useTheme } from '@emotion/react';

const SeparatorText = ({ text, lastComponent, theme }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      '@media (max-width: 820px)': {
        display: 'block',
      }
    }}
  >
    <Typography
      variant='p'
      sx={{
        fontWeight: 500,
      }}
    >
      {text}
    </Typography>
    {lastComponent ? null :
      <Box
        sx={{
          content: '""',
          display: 'inline-block',
          width: '2px',
          height: '86px',
          bgcolor: theme.palette.text.hover,
          mx: '20px',
          '@media (max-width: 820px)': {
            mx: '0',
            width: '100%',
            height: '2px',
            display: 'block',
            my: '2rem'
          }
        }}
      />}
  </Box>
);

export default function AboutSection({ minHeight }) {
  const theme = useTheme();
  return (
    <Box component={'section'} id='about'
      sx={{
        minHeight: { xs: '600px', md: minHeight },
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
        '@media (max-width: 820px)': {
          backgroundImage: 'none',
          minHeight: '700px'
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          maxWidth: '80%',
          justifyContent: 'space-around',
          textAlign: 'start',
          '@media (max-width: 820px)': {
            maxWidth: '100%',
          }
        }}
      >
        <Box sx={{
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          bgcolor: theme.palette.background.default,
          color: theme.palette.text.primary,
          padding: '10px',
          borderRadius: '20px',
          '@media (max-width: 820px)': {
            textAlign: 'center',
            mb: '2rem'
          }
        }}>
          <Typography variant='h2' sx={{ mb: '30px' }}>ABOUT US</Typography>
          <Typography variant='p' >
            We are a group of maritime professionals with a vast experience in ships chartering,
            commercial operation, surveying, navigation and legal aspects of carriage of goods.
            We are capable of providing either full accompanying service for your trade or a spot
            assistance in whatever challenge you have in respect of sea transport of bulk cargo.
          </Typography>
        </Box>
        <Box
          sx={{
            maxWidthwidth: '400px',
            '@media (max-width: 820px)': {
              display: 'none',
            }
          }}>
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
          padding: '20px',
          '@media (max-width: 600px)': {
            padding: '0',
          }
        }}
      >
        <Typography variant='h3'>Our commitment in action: prioritizing excellence in dry cargo shipping</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            my: '30px',
            '@media (max-width: 820px)': {
              display: 'block',
            }
          }}
        >
          <SeparatorText theme={theme} text='Extremely Fast Dispatch' />
          <SeparatorText theme={theme} text='Dedicated Customer Support' />
          <SeparatorText theme={theme} text='Sustainable Shipping Practices' />
          <SeparatorText text='Real-Time Transparency in Cargo Movement' lastComponent={true} />
        </Box>
        <Typography variant='p' sx={{ maxWidth: '1100px', textAlign: 'start' }}>
          It was a long way for us to establish ourselves as a recognised shipping firm and we strive to maintain our reputation in the field delivering best results and cost-efficient solutions for our clients. Excellent market awareness, passion in work and distinct expertise in dry bulk cargoes and vessels are our keys to clients' success.         </Typography>
      </Box>
    </Box>
  )
}
