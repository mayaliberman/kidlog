import React from 'react';
import { Button, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Link } from 'react-router-dom';
import logoPurple from '../assets/logo-purple.svg';
const useStyles = makeStyles((theme) => ({
  root: {},
  margin: {
    margin: theme.spacing(1),
  },
  container: {
    backgroundColor: theme.palette.common.light,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  input: {
   
    paddingLeft: '15px',
    whiteSpace: 'nowrap',
    borderRadius: '10px',
    width: '100%',
    boxShadow:
      ' 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 6px 24px rgba(0, 0, 0, 0.06);',
  },
}));

const CssTextField = withStyles({
  root: {
    marginBottom: '15px',
        
    '& .MuiInputBase-input-53': {
      fontSize: '14px',
      padding: '12px',
    },
    '& .MuiInput-underline-67': {
      borderBottom: '0px solid white',
    },

    '& .MuiInput-underline-67:hover:not(.Mui-disabled):before': {
      borderBottom: '0px solid white',
    },
    '& .MuiInputBase-input-83': {
      padding: '0px',
      color: '#6F8BA4',
     
    },
    '& .MuiInput-underline-67:before': {
      borderBottom: '0px solid white',
    },
    '& .MuiInput-underline-67:after': {
      borderBottom: '1px solid white',
    },
  },
})(TextField);
function SignUp() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Box className={classes.container}>
        <Container style={{ textAlign: 'center', maxWidth: '500px' }}>
          <img alt='company logo' src={logoPurple} />
          <Typography
            variant='h3'
            component='h3'
            style={{
              color: '#3B566E',
              lingHeight: '26px',
              padding: '20px 0px',
            }}
          >
            Sign up to create your Kidlog account
          </Typography>
          <form noValidate autoComplete='off'>
            <CssTextField
              label='Email'
              id='custom-css-outlined-input'
              className={classes.input}
              InputLabelProps={{
                style: {
                  color: '#C0D1E0',
                  fontSize: '14px',
                  paddingLeft: '10px',
                  paddingTop: '5px',
                },
              }}
              inputProps={{
                style: {
                  fontSize: '14px',
                  padding: '15px',
                  color: '#6F8BA4',
                },
              }}
            ></CssTextField>
            <CssTextField
              id='standard-basic'
              label='Password'
              type='password'
              className={classes.input}
              InputLabelProps={{
                style: {
                  color: '#C0D1E0',
                  fontSize: '14px',
                  paddingLeft: '10px',
                  paddingTop: '5px',
                },
              }}
              inputProps={{
                style: {
                  fontSize: '40px',
                },
              }}
            ></CssTextField>

            <CssTextField
              id='standard-basic'
              label='Confirm Password'
              type='password'
              className={classes.input}
              InputLabelProps={{
                style: {
                  color: '#C0D1E0',
                  fontSize: '14px',
                  paddingLeft: '10px',
                  paddingTop: '5px',
                },
              }}
              inputProps={{
                style: {
                  fontSize: '40px',
                },
              }}
            ></CssTextField>

            <Button
              variant='contained'
              color='primary'
              style={{
                padding: '15px 80px',
                marginTop: '30px',
                textTransform: 'uppercase',
                  width: '100%',
                fontSize: '15px'
              }}
            >
              Continue
            </Button>
          </form>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default SignUp;
