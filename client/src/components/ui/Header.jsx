import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import logo from "../../assets/Logo_white_splash.svg";
import profileIcon from "../../assets/image-4.svg";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Avatar, Tab, Tabs } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles(() => ({
  headerStyles: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: { height: "1.7em" },
  button: { color: "white", textTransform: "none" },
  avatar: {
    backgroundColor: "white",
    marginRight: "15px",
    height: "30px",
    width: "30px",
  },
  logout: { color: "white" },
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
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="static">
          <Toolbar className={classes.headerStyles}>
            <img alt="company logo" className={classes.logo} src={logo} />
            <Typography variant="h6" color="common">
              My Posts
            </Typography>

            <div>
              <Button className={classes.button}>
                <Avatar
                  alt="user avatar"
                  src={profileIcon}
                  className={classes.avatar}
                ></Avatar>
                Maya
              </Button>
              <Button className={classes.button}>
                <ExitToAppIcon className={classes.logout} />
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div style={{ marginTop: "60px"}}>
        {/* <Box>
          <Typography variant="h6">Hello there</Typography>
        </Box> */}
      </div>
    </React.Fragment>
  );
};

export default Header;
