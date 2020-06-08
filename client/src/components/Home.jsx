import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Image from "../assets/welcome-bg.png";
import logo from "../assets/Logo_white_splash.svg";
import { Link } from "react-router-dom";

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
}));
function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className={classes.container}>
        <Container style={{ textAlign: "center" }}>
          <img alt="company logo" src={logo} />
          <Typography variant="h2" className={classes.root}>
            Every kid can become multi-talent
          </Typography>
          <Typography variant="h4" className={classes.root}>
            Track your kid's progress and share your expericnes
          </Typography>
          <Button
            variant="contained"
            color="primary"
            buttonStyle={"shape"}
            style={{ padding: "15px 80px", margin: "30px", textTransform: 'uppercase' }}
            component={Link}
            to="/sign-in"
          >
            Let's Start
          </Button>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default Home;
