import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Image from '../../assets/welcome-bg.png';
import ImageMobile from '../../assets/bg.png';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo_white_splash.svg';
import PurpleButton from '../ui/PurpleButton';
import CustomizedInputs from '../ui/InputBorderBottom';

function SignIn() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.box}>
        <Container className={classes.container}>
          <img alt='company logo' src={logo} />
          <form  autoComplete='off'>
            <CustomizedInputs label='Email' type='text' />
            <CustomizedInputs label='Password' type='password' />
            <Typography variant='body2' className={classes.root}>
              Forgot password?
            </Typography>

            <PurpleButton style={{ width: '100%' }} type='submit'>
              {' '}
              Sign In
            </PurpleButton>
          </form>
          <Button
            variant='body2'
            className={classes.toSignUp}
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

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'right',
    color: 'white',
    marginTop: '15px',
    
  },
  margin: {
    margin: theme.spacing(1),
  },
  box: {
    backgroundImage: `url(${Image})`,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media (max-width:375px)': {
      backgroundImage: `url(${ImageMobile})`,
    },
  },
  container: {
    textAlign: 'center',
    maxWidth: '500px',
  },
  toSignUp: {
    marginTop: '40px',
    textAlign: 'center',
    color: theme.palette.common.white,
    textTransform: 'none',
  },
}));

export default SignIn;
