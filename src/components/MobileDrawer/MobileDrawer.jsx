import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';


export default function MobileDrawer() {
  const theme = useTheme();
  const [state, setState] = React.useState({
    left: false,
  });

  const pages = ['home', 'about', 'services', 'advantages', 'contact'];

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


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 250, padding: '10px', mt: 5, '& >:after': {
          content: "''",
          display: 'block',
          width: '100%',
          height: '2px',
          bgcolor: theme.palette.text.hover,
          mt: '0.5rem'
        }
      }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {pages.map((page) => (
        <MenuItem sx={{ display: 'block' }} onClick={() => scrollToSection(page)} key={page} >
          <Typography
            textAlign='start'
            sx={{
              textTransform: 'uppercase',
              color: theme.palette.text.primary
            }}
          >
            {page}
          </Typography>
        </MenuItem>
      ))}
    </Box>
  );

  return (
    <Box>
      <IconButton
        size={'large'}
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        color='inherit'
        onClick={toggleDrawer('left', true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor='left'
        open={state['left']}
        onClose={toggleDrawer('left', false)}
        PaperProps={{
          sx: {
            bgcolor: theme.palette.background.default
          }
        }}
      >
        {list('left')}
      </Drawer>
    </Box>
  );
}