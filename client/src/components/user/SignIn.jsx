import React from 'react';
import { Button, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Image from '../../assets/welcome-bg.png';
import ImageMobile from '../../assets/bg.png';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo_white_splash.svg';
import PurpleButton from '../ui/PurpleButton';
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '15px',
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

  input: {
    borderBottom: `1px solid white`,
    whiteSpace: 'nowrap',
    width: '100%',
    marginTop: '15px',
    '& label': {
      color: 'white',
      whiteSpace: 'nowrap',
      fontSize: '18px',
      paddingTop: '5px',
    },
    '& input': {
      fontSize: '20px',
      color: 'white',
      paddingBottom: '15px',
     
    },
    '& input:after': {
      borderBottom: 'none',
    },
    ' &.MuiInput-underline:after': {
      broderBottom: 'none',
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
            <TextField
              label='Email'
              id='custom-css-outlined-input'
              className={classes.input}
            ></TextField>
            <TextField
              id='standard-basic'
              label='Password'
              type='password'
              className={classes.input}
            ></TextField>
            <Typography
              variant='body2'
              className={classes.root}
              style={{ textAlign: 'right', color: 'white', marginTop: '15px' }}
            >
              Forgot password?
            </Typography>
            <PurpleButton
              style={{
                width: '100%',
              }}
            >
              Sign In
            </PurpleButton>
          </form>
          <Button
            variant='body2'
            style={{
              marginTop: '40px',
              textAlign: 'center',
              color: 'white',
              textTransform: 'none',
            }}
            component={Link}
            to='/sign-up'
          >
            Don't have an accout? Sign up
          </Button>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default SignIn;
