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
  },
  margin: {
   
    margin: theme.spacing(1),
  },
  container: {
    backgroundImage: `url(${Image})`,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  input: {
    borderBottom: `1px solid ${theme.palette.common.white}`,
    whiteSpace: "nowrap",
    width: "100%"
     
  },
  
}));

const CssTextField = withStyles({
  root: {
    marginBottom: "15px",
    "& .MuiInputBase-input-53": {
      color: 'white',
      fontSize: '25px'
    },
    "& .MuiInput-underline-37": {
      borderBottom: "1px solid trasparent",
    },
    "& .MuiInput-underline-37:before": {
      borderBottom: "1px solid white",
    },
    "& .MuiInput-underline-37:hover:not(.Mui-disabled):before": {
      borderBottom: "1px solid white",
    },
  },
})(TextField);


function SignIn() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Box className={classes.container}>
        <Container style={{ textAlign: "center", maxWidth: "500px" }}>
          <img alt="company logo" src={logo} />
          <form noValidate autoComplete="off">
            <CssTextField
              label="Email"
              id="custom-css-outlined-input"
              className={classes.input}
              InputLabelProps={{
                style: {
                  whiteSpace: "nowrap",
                  color: "white",
                  fontSize: "18px",
                },
              }}
            ></CssTextField>
            <CssTextField
              id="standard-basic"
              label="Password"
              type="password"
              className={classes.input}
              InputLabelProps={{
                style: {
                  whiteSpace: "nowrap",
                  color: "white",
                  fontSize: "18px",
                },
              }}
            ></CssTextField>

            <Typography
              variant="body2"
              // className={classes.root}
              style={{ textAlign: "right", color: "white", marginTop: "15px" }}
            >
              Forgot password?
            </Typography>
            <Button
              variant="contained"
              color="primary"
              style={{
                padding: "15px 80px",
                marginTop: "30px",
                textTransform: "uppercase",
              }}
            >
              Sign In
            </Button>
          </form>
          <Typography
            variant="body2"
            style={{ marginTop: "20px", textAlign: "center", color: "white" }}
            component={Link}
            to="/sign-up"
            // component={Link}
            // to="/sign-up"
          >
            Don't have an accout? Sign up
          </Typography>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default SignIn;
