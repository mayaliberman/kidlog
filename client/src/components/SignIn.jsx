import React from "react";
import { Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  withStyles,
  
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Image from "../assets/welcome-bg.png";
import { Link } from "react-router-dom";
import logo from "../assets/Logo_white_splash.svg";


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
  },

  input: {
    borderBottom: `1px solid white`,
    whiteSpace: 'nowrap',
    width: '100%',
    marginTop: '15px',
  },
}));

const CssTextField = withStyles({
  root: {
    marginBottom: '15px',
    '& .MuiInputBase-input-53': {
      color: 'white',
      fontSize: '14px',
      padding: '12px',
    },
    '& .MuiInput-underline-37': {
      borderBottom: '0px solid trasparent',
    },
    '& .MuiInput-underline-37:before': {
      borderBottom: '0px solid white',
    },
    '& .MuiInput-underline-37:after': {
      borderBottom: '0px solid white',
    },
    '& .MuiInput-underline-37:hover:not(.Mui-disabled):before': {
      borderBottom: '0px solid white',
    },
  },
})(TextField);


function SignIn() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Box className={classes.container}>
        <Container style={{ textAlign: 'center', maxWidth: '500px' }}>
          <img alt='company logo' src={logo} />
          <form noValidate autoComplete='off'>
            <CssTextField
              label='Email'
              id='custom-css-outlined-input'
              className={classes.input}
              InputLabelProps={{
                style: {
                  whiteSpace: 'nowrap',
                  color: 'white',
                  fontSize: '18px',
                  paddingTop: '5px',
                },
              }}
              inputProps={{
                style: {
                  fontSize: '14px',
                  padding: '15px',
                  // color: '#6F8BA4',
                },
              }}
            ></CssTextField>
            <CssTextField
              id='standard-basic'
              label='Password'
              type='password'
              className={classes.input}
              // InputLabelProps={{
              //   style: {
              //     whiteSpace: 'nowrap',
              //     color: 'white',
              //     fontSize: '18px',
              //   },
              // }}
              InputLabelProps={{
                style: {
                  color: '#fff',
                  fontSize: '18px',
                  paddingTop: '5px',
                },
              }}
              inputProps={{
                style: {
                  fontSize: '20px',
                },
              }}
            ></CssTextField>

            <Typography
              variant='body2'
              className={classes.root}
              style={{ textAlign: 'right', color: 'white', marginTop: '15px' }}
            >
              Forgot password?
            </Typography>
            <Button
              variant='contained'
              color='primary'
              style={{
                padding: '15px 80px',
                marginTop: '30px',
                textTransform: 'uppercase',
                width: '100%',
              }}
            >
              Sign In
            </Button>
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
