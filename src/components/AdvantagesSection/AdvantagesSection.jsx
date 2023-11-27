import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material'
import React from 'react';
import advantagesSection_img_light from '../../images/advantagesSection_img_light.svg';
import advantagesSection_img_dark from '../../images/advantagesSection_img_dark.svg';

export default function AdvantagesSection({ minHeight }) {
  const theme = useTheme();
  return (
    <Box component={'section'} id='advantages'
      sx={{
        minHeight: minHeight,
        bgcolor: theme.palette.background.default,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minWidth: '70%', mx: 'auto' }}>
        <Typography variant='h2'
          sx={{
            margin: '120px 0',
            color: theme.palette.text.primary,
            alignSelf: 'center',
            '@media (max-width: 1470px)': {
              mb: '50px',
              mt: '40px',
              minWidth: '90%'
            },
          }}
        >
          ADVANTAGES
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box sx={{ maxWidth: '40%', position: 'absolute', left: 0, bottom: 0 }}>
            <img src={theme.palette.mode === 'light' ? advantagesSection_img_light : advantagesSection_img_dark} alt='' width={'100%'} />
          </Box>
          <Box
            sx={{
              maxWidth: '510px',
              textAlign: 'start',
              color: theme.palette.text.primary,
              bgcolor: theme.palette.background.default,
              borderRadius: '20px',
              padding: '10px',
              justifySelf: 'flex-end',
              '& > :not(:last-child)::after': {
                content: '""',
                display: 'block',
                width: '100%',
                height: '1px',
                bgcolor: theme.palette.text.hover,
                my: '32px',
              }
            }}
          >
            <Box>
              <Typography variant='h4'>lorem ipsum</Typography>
              <Typography variant='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </Typography>
            </Box>
            <Box>
              <Typography variant='h4'>lorem ipsum</Typography>
              <Typography variant='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </Typography>
            </Box>
            <Box>
              <Typography variant='h4'>lorem ipsum</Typography>
              <Typography variant='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
