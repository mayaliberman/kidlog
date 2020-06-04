import React from "react";
import {Button, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
const style = {
  background: "#504DE5",
  borderRadius: 100,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 90px",
  fontSize: "15px",
  margin: "30px",
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      //   width: "25ch",
      display: "flex",
      marginTop: "20px",
      marginBottom: "20px",
    },
  },
  input: {
    color: theme.palette.common.white,
  },
}));

function SignIn() {
  const classes = useStyles();

  return (
    <div >
      <div >
               <form noValidate autoComplete="off" className={classes.root}>
          <TextField id="standard-basic" label="Email"></TextField>
          <TextField
            id="standard-basic"
            label="Password"
            type="password"
            className={classes.label}
          ></TextField>
          <Button variant="outlined" color="primary" size="small" style={style}>
            Sign In
          </Button>
        </form>
        <p>Don't have an accout? Sign up</p>
      </div>
    </div>
  );
}

export default SignIn;
