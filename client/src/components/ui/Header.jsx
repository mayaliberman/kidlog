import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import logo from '../../assets/Logo_white_splash.svg'

const useStyles = makeStyles(() => ({
  headerStyles: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: { height: "1.7em" },
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = () => {
  const classes = useStyles();
  return (
    <ElevationScroll>
      <AppBar position="static">
        <Toolbar className={classes.headerStyles}>
          <img alt="company logo" className={classes.logo} src={logo} />
          <Typography variant="h6" color="common">
            My Posts
          </Typography>
          <MenuIcon />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
