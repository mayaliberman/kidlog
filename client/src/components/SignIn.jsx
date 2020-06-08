import React from "react";
import { Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Image from "../assets/welcome-bg.png";
import { Link } from "react-router-dom";
import logo from "../assets/Logo_white_splash.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    padding: theme.spacing(1),
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
    width: "80%",
    // "&:hover": {
    //   // borderBottom: `1px solid red`,
    // },
    // "& .MuiOutlinedInput-root": {
    //   "& fieldset": {
    //     borderColor: "yellow",
    //   },
    // },
  },
}));

function SignIn() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Box className={classes.container}>
        <Container style={{ textAlign: "center", maxWidth: "500px" }}>
          <img alt="company logo" src={logo} />
          <form noValidate autoComplete="off" className={classes.root}>
            <TextField
              className={classes.input}
              id="standard-basic"
              label="Email"
              InputLabelProps={{
                style: {
                  whiteSpace: "nowrap",
                  color: "white",
                  fontSize: "18px",
                },
              }}
            ></TextField>
            <TextField
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
            ></TextField>
            <Typography
              variant="body2"
              className={classes.root}
              // component={Link}
              // to="/sign-up"
            >
              Forgot password?
            </Typography>
            <Button
              variant="contained"
              color="primary"
              buttonStyle={"shape"}
              style={{
                padding: "15px 80px",
                margin: "30px",
                textTransform: "uppercase",
              }}
            >
              Sign In
            </Button>
          </form>
          <Typography
            variant="body2"
            className={classes.root}
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
