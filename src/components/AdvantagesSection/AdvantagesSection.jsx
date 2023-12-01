import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import React from 'react';
import advantagesSection_img_light from '../../images/advantagesSection_img_light.svg';
import advantagesSection_img_dark from '../../images/advantagesSection_img_dark.svg';
import ship_new from '../../images/ship_new.svg';

const advantagesData = [
  {
    title: 'Transparency',
    description:
      "We're all about openness. You'll have real-time access to pricing, vessel performance, and operations — because trust begins with transparency.",
  },
  {
    title: 'Flexibility',
    description:
      'Your needs, our solutions. We adapt schedules, cargo requirements, and strategies to match your unique demands, ensuring a seamless experience.',
  },
  {
    title: 'Dedication',
    description:
      "From start to finish, we're committed to your cargo's safety and efficiency. Our dedicated team goes above and beyond to exceed industry standards.",
  },
];

export default function AdvantagesSection({ minHeight }) {
  const theme = useTheme();

  return (
    <Box
      component={'section'}
      id='advantages'
      sx={{
        minHeight: { xs: '600px', md: minHeight },
        bgcolor: theme.palette.background.default,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: '70%', mx: 'auto' }}>
        <Typography
          variant='h2'
          sx={{
            margin: '120px 0',
            color: theme.palette.text.primary,
            alignSelf: 'center',
            '@media (max-width: 1470px)': {
              mb: '50px',
              mt: '40px',
              minWidth: '90%',
            },
            '@media (max-width: 820px)': {
              mb: 2,
            }
          }}
        >
          ADVANTAGES
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', rowGap: 10 }}>
          <Box
            sx={{
              mx: 'auto',
              maxWidth: '2400px',
              color: theme.palette.text.primary,
              bgcolor: theme.palette.background.default,
              borderRadius: '20px',
              padding: { xs: 0, md: '10px' },
              justifySelf: 'center',
              display: 'flex',
              flexDirection: 'row',
              '@media (max-width: 820px)': {
                flexDirection: 'column',
              }
            }}
          >
            {advantagesData.map((advantage, index) => (
              <React.Fragment key={index}>
                <AdvantageBox
                  title={advantage.title}
                  description={advantage.description}
                  index={index}
                  length={advantagesData.length}
                />
                {index !== advantagesData.length - 1 && (
                  <DividerBox color={theme.palette.text.hover} />
                )}
              </React.Fragment>
            ))}
          </Box>
          <Box
            sx={{
              display: 'block',
              width: '100%',
              '@media (max-width: 820px)': {
                display: 'none',
              },
            }}
          >
            <img src={theme.palette.mode === 'light' ? ship_new : ship_new} alt='' width={'100%'} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const AdvantageBox = ({ title, description }) => {
  return (
    <Box sx={{ flex: 1, textAlign: 'center', py: 3, px: { xs: 0, md: 3 } }}>
      <Typography variant='h4' sx={{ mb: 2 }}>{title}</Typography>
      <Typography variant='p'>{description}</Typography>
    </Box>
  );
};

const DividerBox = ({ color }) => {
  return <Box
    sx={{
      content: '""',
      display: 'block',
      width: '2px',
      bgcolor: color,
      '@media (max-width: 820px)': {
        width: '100%',
        height: '2px',
        display: 'block',
      }
    }}
  />;
};
