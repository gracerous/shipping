import React from 'react'
import ContentCard from '../ContentCard/ContentCard'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@emotion/react';
import servicesSection_bg_light from '../../images/servicesSection_bg_light.svg';
import servicesSection_bg_dark from '../../images/servicesSection_bg_dark.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { CardsContentArr } from './CardContent';

export default function ServicesSection({ minHeight }) {
  const theme = useTheme();
  return (
    <Box component={'section'} id='destinations'
      sx={{
        minHeight: { xs: '600px', md: minHeight },
        bgcolor: theme.palette.background.default,
        backgroundImage: theme.palette.mode === 'light' ? `url(${servicesSection_bg_light})` : `url(${servicesSection_bg_dark})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        '@media (max-width: 1440px)': {
          backgroundImage: 'none',
          justifyContent: 'flex-start',
        },
      }}
    >
      <Box sx={{
        display: 'flex',
        minWidth: '80%',
        justifyContent: 'space-around',
        flexDirection: 'column',
        margin: '20px 0 40px 0',
        alignContent: 'center'
      }}>
        <Typography variant='h2'
          sx={{
            mb: '120px',
            '@media (max-width: 1470px)': {
              mb: '50px',
              mt: '50px'
            },
            color: theme.palette.text.primary
          }}
        >
          OUR DESTINATIONS
        </Typography>
        <Box sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'center',
        }}>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            loop={'true'}
          >
            {CardsContentArr.map((card) => (
              <SwiperSlide key={card.id}>
                <ContentCard
                  cardImg={card.image}
                  title={card.title}
                  content={card.content}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'row',
            justifyContent: 'center',
            minWidth: '80%',
            flexWrap: 'wrap',
            gap: '20px',
            margin: '0 auto',
          }}
        >
          {CardsContentArr.map((card) => (
            <ContentCard
              key={card.id}
              cardImg={card.image}
              title={card.title}
              content={card.content}
            />
          ))}
        </Box>
      </Box>
    </Box >
  )
}