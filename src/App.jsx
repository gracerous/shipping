import { Box } from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import HomeSection from './components/HomeSection/HomeSection';
import AboutSection from './components/AboutSection/AboutSection';
import ContactSection from './components/ContactSection/ContactSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import AdvantagesSection from './components/AdvantagesSection/AdvantagesSection';
import Footer from './components/Footer/Footer';
import { setDarkMode } from './redux/reducers/themeSlice'
import { lightTheme, darkTheme } from './components/Theme/themes';
import '@fontsource/ubuntu';
import '@fontsource/roboto';
import '@fontsource/roboto/500.css';
import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [mode, setMode] = useState(darkMode ? 'dark' : 'light');

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
  const theme = useMemo(() => createTheme(mode === 'dark' ? darkTheme : lightTheme), [mode]);

  useEffect(() => {
    prefersDarkMode ? dispatch(setDarkMode(true)) : dispatch(setDarkMode(false));
  }, [prefersDarkMode, dispatch]);

  useEffect(() => {
    if (darkMode) {
      setMode('dark');
    } else if (!darkMode) {
      setMode('light');
    }
  }, [darkMode, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Box className='App' sx={{
        width: '100%',
        bgcolor: theme.palette.background.default,
      }}>
        <Box sx={{
          px: { xs: '1rem', md: 0 }
        }}>
          <HomeSection minHeight={minHeight} />
          <AboutSection minHeight={minHeight} />
        </Box>
        <ServicesSection minHeight={minHeight} />
        <Box sx={{
          px: { xs: '1rem', md: 0 }
        }}>
          <AdvantagesSection minHeight={minHeight} />
          <ContactSection minHeight={minHeight} />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;