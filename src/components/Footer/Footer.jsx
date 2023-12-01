import { useTheme } from '@emotion/react';
import { Box, MenuItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import logo from '../../images/logo.svg';

export default function Footer() {
  const theme = useTheme();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const toolbarHeight = 80;

    if (section) {
      const offset = section.getBoundingClientRect().top - toolbarHeight;
      window.scrollTo({
        top: offset + window.scrollY,
        behavior: 'smooth',
      });
    }
  };

  const CustomMenuItem = styled(MenuItem)(() => ({
    borderRadius: '25px',
    '&:hover, &.Mui-focusVisible': {
      backgroundColor: 'transparent',
    },
  }));

  const pages = ['home', 'about', 'services', 'advantages', 'contact'];

  return (
    <Box component={'footer'} sx={{ minHeight: '230px', bgcolor: theme.palette.header.background, py: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
          <Box component='a' href=''>
            <img src={logo} alt='Logo' width={'100%'} />
          </Box>
          <Box sx={{ maxWidth: '500px' }}>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            </Typography>
          </Box>
        </Box>
        <Box sx={{  display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}>
          {pages.map((page) => (
            <CustomMenuItem onClick={() => scrollToSection(page)} key={page} >
              <Typography
                textAlign='center'
                sx={{
                  textTransform: 'uppercase', color: theme.palette.text.secondary, '&:hover': {
                    color: theme.palette.text.hover
                  }
                }}
              >
                {page}
              </Typography>
            </CustomMenuItem>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
