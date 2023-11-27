import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { toggleTheme } from '../../redux/reducers/themeSlice';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import MobileDrawer from '../MobileDrawer/MobileDrawer';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../images/logo.svg';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 80,
  height: 50,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    top: 9,
    transform: 'translateX(8px)',
    transition: '0.4s',
    '&.Mui-checked': {
      color: '#fbfbfd',
      transform: 'translateX(40px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="100%" width="20px" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.background.default,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.button.background,
    width: 30,
    height: 30,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        // theme.palette.primary.secondary,
        '#F3F3F3',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.background.default,
    borderRadius: 50 / 2,
  },
}));

const CustomMenuItem = styled(MenuItem)(() => ({
  borderRadius: '25px',
  '&:hover, &.Mui-focusVisible': {
    backgroundColor: 'transparent',
  },
}));

function ResponsiveAppBar() {
  const dispatch = useDispatch();
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

  const pages = ['home', 'about', 'services', 'advantages', 'contact'];

  return (
    <AppBar position='sticky' sx={{ boxShadow: 'none' }}>
      <Toolbar disableGutters sx={{ height: '5rem', bgcolor: theme.palette.header.background, p: '0px 24px' }}>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <MobileDrawer />
        </Box>
        <Box component='a' href=''>
          <img src={logo} alt='Logo' width={'100%'} />
        </Box>
        <Box component={'nav'}
          sx={{
            ml: 'auto',
            display: { xs: 'none', md: 'flex' }
          }}
        >
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
        <MaterialUISwitch onClick={() => dispatch(toggleTheme())} />
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;