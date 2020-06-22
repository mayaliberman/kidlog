import React from "react";
import { makeStyles} from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Image from "../assets/welcome-bg.png";
import logo from "../assets/Logo_white_splash.svg";
import { Link } from "react-router-dom";
import ImageMobile from '../assets/bg.png';
import PurpleButton from './ui/PurpleButton';


const  Home = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
           <Box className={classes.box}>
        <Container className={classes.container}>
          <img alt='company logo' src={logo} />
          <Typography variant='h2' className={classes.root}>
            Every kid can become multi-talent
          </Typography>
          <Typography variant='h4' className={classes.root}>
            Track your kid's progress and share your expericnes
          </Typography>
          <PurpleButton component={Link} to='/sign-in'>
            Let's Start
          </PurpleButton>
        </Container>
      </Box>
    </React.Fragment>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    padding: theme.spacing(1),
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
  },
}));

export default Home;
