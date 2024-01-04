import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import placeholder_img from '../../images/placeholder_img.svg'
import { useTheme } from '@emotion/react';

export default function ContentCard({ cardImg, title, content }) {
  const theme = useTheme();
  return (
    <Card sx={{
      maxWidth: '350px',
      minHeight: '500px',
      borderRadius: '10px',
      '&:hover': {
        boxShadow: `-1px 10px 29px 0px ${theme.palette.card.hover}`,
        '& .cardHeader': {
          color: theme.palette.mode === 'light' ? theme.palette.text.hover : 'none',
        },
      },
      '@media (max-width: 1470px)': {
        maxWidth: '280px',
        minHeight: '400px',
      },
      '@media (max-width: 820px)': {
        '&:hover': {
          boxShadow: 'none',
          '& .cardHeader': {
            color: theme.palette.card.text,
          },
        },
      },
    }}>
      <CardMedia
        component='img'
        image={cardImg || placeholder_img}
        alt='services image'
        sx={{
          height: '240px',
          borderTopLeftRadius: 'inherit',
          borderTopRightRadius: 'inherit',
          '@media (max-width: 1470px)': {
            height: '200px'
          },
        }}
      />
      <CardContent sx={{ textAlign: 'start' }}>
        <Typography className='cardHeader' gutterBottom variant='h5' component='div' color={theme.palette.card.text} sx={{
        }}>
          {title}
        </Typography>
        <Typography variant='p' color={theme.palette.card.text}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
