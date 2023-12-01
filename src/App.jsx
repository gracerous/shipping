import { Box } from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from 'react-redux';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import HomeSection from './components/HomeSection/HomeSection';
import AboutSection from './components/AboutSection/AboutSection';
import ContactSection from './components/ContactSection/ContactSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import AdvantagesSection from './components/AdvantagesSection/AdvantagesSection';
import Footer from './components/Footer/Footer';
import "@fontsource/ubuntu";
import "@fontsource/roboto";
import '@fontsource/roboto/500.css';
import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';

const getDesignTokens = (mode) => {
  const buttonBackground = '#4E6EFE';
  const hoverBackground = '#2E3F8A';

  return {
    typography: {
      fontFamily: [
        'Ubuntu'
      ],
      h1: {
        fontSize: '4.125rem',
        fontWeight: '400',
        lineHeight: 'normal',
        fontStyle: 'normal',
        '@media (max-width: 1470px)': {
          fontSize: '3.5rem',
        },
        '@media (max-width: 1280px)': {
          fontSize: '3rem',
        },
        '@media (max-width: 600px)': {
          fontSize: '1.5rem',
        },
      },
      h2: {
        fontSize: '4.125rem',
        fontWeight: '400',
        lineHeight: 'normal',
        fontStyle: 'normal',
        '@media (max-width: 1470px)': {
          fontSize: '3rem',
        },
        '@media (max-width: 1280px)': {
          fontSize: '3rem',
        },
        '@media (max-width: 600px)': {
          fontSize: '1.5rem',
        }
      },
      h3: {
        fontSize: '2.625rem',
        fontWeight: '500',
        lineHeight: 'normal',
        fontStyle: 'normal',
        '@media (max-width: 1470px)': {
          fontSize: '2rem',
        },
        '@media (max-width: 1280px)': {
          fontSize: '1.5rem',
        },
        '@media (max-width: 600px)': {
          fontSize: '1rem',
        }
      },
      h4: {
        fontSize: '1.375rem',
        lineHeight: 'normal',
        fontStyle: 'normal',
        fontWeight: '400',
        fontFamily: 'Roboto',
        '@media (max-width: 1470px)': {
          fontSize: '1.125rem',
        },
        '@media (max-width: 1280px)': {
          fontSize: '1rem',
        },
        '@media (max-width: 600px)': {
          fontSize: '0.875rem',
        },
      },
      p: {
        fontSize: '1.375rem',
        lineHeight: 'normal',
        fontStyle: 'normal',
        fontWeight: '400',
        fontFamily: 'Roboto',
        '@media (max-width: 1470px)': {
          fontSize: '1.125rem',
        },
        '@media (max-width: 1280px)': {
          fontSize: '1rem',
        },
        '@media (max-width: 600px)': {
          fontSize: '0.8125rem',
        },
      }
    },
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          // palette values for light mode
          primary: {
            main: '#3B4047',
            secondary: '#F6F88D'
          },
          header: {
            background: '#2E3F8A',
          },
          button: {
            text: '#F3F3F3',
            background: '#4E6EFE'
          },
          background: {
            default: '#F3F3F3',
            secondary: '#F3F3F3',
            paper: '#fbfbfd',
          },
          text: {
            primary: '#121939',
            secondary: '#DADADA',
            icons: '#686C72',
            hover: '#FE6A17'
          },
          card: {
            hover: '#fE6A17CC',
            text: '#121939'
          }
        }
        : {
          // palette values for dark mode
          primary: {
            main: '#3B4047',
            secondary: '#F6F88D'
          },
          header: {
            background: '#212739',
          },
          button: {
            text: '#DADADA',
            background: '#3C55C7'
          },
          background: {
            default: '#121939',
            secondary: '#F3F3F3',
            paper: '#C2D1D9'
          },
          text: {
            primary: '#DADADA',
            secondary: '#DADADA',
            icons: '#686C72',
            hover: '#FE6A17'
          },
          card: {
            hover: '#DADADACC',
            text: '#121939'
          }
        }),
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: buttonBackground,
            '&:hover': {
              backgroundColor: hoverBackground,
            },
          },
        },
      },
    }
  }
};

function App() {
  const [mode, setMode] = useState('light');
  const darkMode = useSelector((state) => state.theme.darkMode);

  const [minHeight, setMinHeight] = useState('800px')

  useEffect(() => {
    const headerHeight = 80;
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      setMinHeight(`${windowHeight - headerHeight}px`);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  useEffect(() => {
    if (darkMode) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Box className='App' sx={{
        width: '100%',
        bgcolor: theme.palette.background.default,
      }}>
        <Box sx={{
          '@media (max-width: 600px)': {
            px: '1rem',
          }
        }}>
          <HomeSection minHeight={minHeight} />
          <AboutSection minHeight={minHeight} />
        </Box>
        <ServicesSection minHeight={minHeight} />
        <Box sx={{
          '@media (max-width: 600px)': {
            px: '1rem',
          }
        }}>
          <AdvantagesSection minHeight={minHeight} />
          <ContactSection minHeight={minHeight} />
          {/* <Footer /> */}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;