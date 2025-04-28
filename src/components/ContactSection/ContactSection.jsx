<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
import homeSection_bg_light from '../../images/homeSection_bg_light.svg';
>>>>>>> 34a8ed90b95e2e24813063be868a3db4adeb6042
import { useTheme } from '@emotion/react';
import { TextField, Grid, Box, Typography, Link, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
<<<<<<< HEAD
import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';
=======
>>>>>>> 34a8ed90b95e2e24813063be868a3db4adeb6042

export default function ContactSection({ minHeight }) {
  const theme = useTheme();

<<<<<<< HEAD
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

=======
>>>>>>> 34a8ed90b95e2e24813063be868a3db4adeb6042
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    telephone: Yup.string(),
    message: Yup.string().required('Message is required'),
  });

  const initialValues = {
    name: '',
    email: '',
    telephone: '',
    message: '',
  };

<<<<<<< HEAD
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch('https://shipping-server.vercel.app/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        resetForm({ values: initialValues });
        setSnackbarOpen(true);
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


=======
  const handleSubmit = (values) => {
    console.log(values);
  };

>>>>>>> 34a8ed90b95e2e24813063be868a3db4adeb6042
  return (
    <Box component={'section'} id='contact'
      sx={{
        minHeight: { xs: '400px', md: minHeight },
        bgcolor: theme.palette.background.default,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        backgroundPosition: 'bottom',
        backgroundPosition: 'center',
        justifyContent: 'center',
        '@media (max-width: 820px)': {
          justifyContent: 'flex-start',
        }
      }}
    >
<<<<<<< HEAD
      <CustomSnackBar isSnackbarOpen={isSnackbarOpen} handleClose={() => setSnackbarOpen(false)} />
=======
>>>>>>> 34a8ed90b95e2e24813063be868a3db4adeb6042
      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: 5,
            color: theme.palette.text.primary,
            '@media (max-width: 820px)': {
              alignItems: 'center'
            }
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'start' } }}>
<<<<<<< HEAD
            <Typography variant='h2' sx={{ lineHeight: '3.5rem', verticalAlign: 'top', marginBottom: '7px' }}>Contact us</Typography>
            <Typography variant='p' sx={{ pl: '5px' }}>for any inquiries</Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'flex-start', flexDirection: 'column', rowGap: 2 }}>
            <Typography variant='h3'>Email</Typography>
            <Link color={theme.palette.text.primary} variant='p' href='mailto:contact@itiro-dmcc.ae'>contact@itiro-dmcc.ae</Link>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none', color: theme.palette.button.text }, flexDirection: 'column', rowGap: 2 }}>
            <Button color='inherit' href='mailto:contact@itiro-dmcc.ae'>Email<EmailIcon sx={{ ml: '10px' }} /></Button>
=======
            <Typography variant='h2' sx={{ lineHeight: '2rem', verticalAlign: 'top', marginBottom: '10px' }}>Contact us</Typography>
            <Typography variant='p'>for any inquiries</Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'flex-start', flexDirection: 'column', rowGap: 2 }}>
            <Typography variant='h3'>Email</Typography>
            <Link color={theme.palette.text.primary} variant='p' href='mailto:example@example.com'>example@example.com</Link>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'flex-start', flexDirection: 'column', rowGap: 2 }}>
            <Typography variant='h3'>Telephone: </Typography>
            <Link color={theme.palette.text.primary} variant='p' href='tel:+1234567890'>+1234567890</Link>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none', color: theme.palette.button.text }, flexDirection: 'column', rowGap: 2 }}>
            <Button color='inherit' href='mailto:example@example.com'>Email<EmailIcon sx={{ ml: '10px' }} /></Button>
>>>>>>> 34a8ed90b95e2e24813063be868a3db4adeb6042
            <Button color='inherit' href='tel:+1234567890'>Telephone<CallIcon sx={{ ml: '10px' }} /></Button>
          </Box>
        </Box>
        <Box sx={{
          maxWidth: '700px',
          '@media (max-width: 820px)': {
            display: 'none',
          }
        }}>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ errors, touched, isValid, dirty }) => (
              <Form>
                <Grid container spacing={2} justifyContent='center'>
                  <Grid item xs={11} sm={5}>
                    <Field
                      name='name'
                      label='Name*'
                      as={TextField}
                      fullWidth
                      error={touched.name && Boolean(errors.name)}
                      helperText={<Box component={'span'} style={{ height: '20px', overflow: 'hidden', display: 'inline-block' }}><Typography component={'span'} fontSize={'0.9rem'}>{touched.name && errors.name}</Typography></Box>}
                    />
                  </Grid>
                  <Grid item xs={11} sm={5}>
                    <Field
                      name='telephone'
                      label='Telephone'
                      as={TextField}
                      fullWidth
                      error={touched.telephone && Boolean(errors.telephone)}
                      helperText={<Box component={'span'} style={{ height: '20px', overflow: 'hidden', display: 'inline-block' }}><Typography component={'span'} fontSize={'0.9rem'}>{touched.telephone && errors.telephone}</Typography></Box>}
                    />
                  </Grid>
                  <Grid item xs={11} sm={10}>
                    <Field
                      name='email'
                      label='Email*'
                      as={TextField}
                      fullWidth
                      error={touched.email && Boolean(errors.email)}
                      helperText={<Box component={'span'} style={{ height: '20px', overflow: 'hidden', display: 'inline-block' }}><Typography component={'span'} fontSize={'0.9rem'}>{touched.email && errors.email}</Typography></Box>}
                    />
                  </Grid>
                  <Grid item xs={11} sm={10}>
                    <Field
                      name='message'
                      label='Message*'
                      as={TextField}
                      multiline
                      fullWidth
                      rows={4}
                      error={touched.message && Boolean(errors.message)}
                      helperText={<Box component={'span'} style={{ height: '20px', overflow: 'hidden', display: 'inline-block' }}><Typography component={'span'} fontSize={'0.9rem'}>{touched.message && errors.message}</Typography></Box>}
                    />
                  </Grid>
<<<<<<< HEAD
                  <Grid item xs={11} sx={{ mb: 1}}>
=======
                  <Grid item xs={11}>
>>>>>>> 34a8ed90b95e2e24813063be868a3db4adeb6042
                    <Button variant='contained' type='submit' disabled={!dirty || !isValid}>Submit</Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  )
}
