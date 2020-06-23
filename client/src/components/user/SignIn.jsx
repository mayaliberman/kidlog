import React from 'react';
import { Button, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Image from '../../assets/welcome-bg.png';
import ImageMobile from '../../assets/bg.png';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo_white_splash.svg';
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '15px',
    textAlign: 'right',
    color: 'white',
    marginTop: '15px',
  },
  margin: {
    margin: theme.spacing(1),
  },
  container: {
    backgroundImage: `url(${Image})`,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media (max-width:375px)': {
      backgroundImage: `url(${ImageMobile})`,
    },
  },

  button: {
    marginTop: '40px',
    textAlign: 'center',
    color: 'white',
    textTransform: 'none',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

function SignIn() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.container}>
        <Container style={{ textAlign: 'center', maxWidth: '500px' }}>
          <img alt='company logo' src={logo} />
          <form noValidate autoComplete='off'>
            <TextField label='Email' id='custom-css-outlined-input'></TextField>
            <TextField
              id='standard-basic'
              label='Password'
              type='password'
            ></TextField>
            <Typography variant='body2' className={classes.root}>
              Forgot password?
            </Typography>
            <Button>Sign In</Button>
          </form>
          <Button
            variant='body2'
            className={classes.button}
            component={Link}
            to='/sign-up'
            disableRipple
          >
            Don't have an accout? Sign up
          </Button>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default SignIn;
