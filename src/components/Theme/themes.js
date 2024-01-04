const buttonBackground = '#4E6EFE';
const hoverBackground = '#2E3F8A';

const typographyObj = {
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
      fontSize: '0.875rem',
    }
  }
};

const componentsObj = {
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
};

export const lightTheme = {
  typography: {
    ...typographyObj
  },
  components: {
    ...componentsObj
  },
  palette: {
    mode: 'light',
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
};

export const darkTheme = {
  typography: {
    ...typographyObj
  },
  components: {
    ...componentsObj
  },
  palette: {
    mode: 'dark',
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
  }
};