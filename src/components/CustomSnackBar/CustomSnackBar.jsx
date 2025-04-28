import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, Box, Typography } from '@mui/material';
import Slide from '@mui/material/Slide';
import { useTheme } from '@emotion/react';

export default function CustomSnackBar({ isSnackbarOpen, handleClose }) {
  const theme = useTheme();

  const [transition, setTransition] = React.useState(() => TransitionRight);

  function TransitionRight(props) {
    return <Slide {...props} direction='right' />;
  }

  const action = (
    <>
      <IconButton
        size='small'
        aria-label='close'
        onClick={handleClose}
      >
        <CloseIcon fontSize='small' />
      </IconButton>
    </>
  );

  return (
    <Box color={theme.palette.text.secondary}>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
        TransitionComponent={transition}
      >
        <Alert onClose={handleClose} variant='filled' color='success' sx={{ width: '100%' }}>
          Your message has been sent. We shall contact you shortly.
        </Alert>
      </Snackbar>
    </Box>
  );
}
