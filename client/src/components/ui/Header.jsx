import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import logo from "../../assets/Logo_white_splash.svg";
import profileIcon from "../../assets/image-4.svg";
import { Avatar } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles(() => ({
  headerStyles: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width:480px)': {
      fontSize: '0.7rem',
    },
  },
  logo: { height: '1.7em' },
  button: {
    color: 'white',
    textTransform: 'none',
    marginRight: '-10px',
    // paddingRight: '0px',
    padding: '10px',
    '&:hover': { backgroundColor: 'transparent' },
  },

  account: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  avatar: {
    backgroundColor: 'white',
    marginRight: '15px',
    height: '30px',
    width: '30px',
    '@media (max-width:480px)': {
      width: '18px',
      height: 'auto',
      marginRight: '5px',
    },
  },
  accountLabel: {
    backgroundColor: 'transparent',
    '@media (max-width:480px)': {
      paddingRight: '10px',
    },
   
  },
  logout: {
    color: 'white',

    '@media (max-width:480px)': {
      width: '18px',
      height: 'auto',
      marginRight: '-5px',
    },
  },
  logoutButton: {
    paddingRight: '0px',
    minWidth: '40px',

    '&:hover': { backgroundColor: 'transparent' },
  },
  title: {
    '@media (max-width:480px)': {
      fontSize: '1rem',
    },
  },
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
        <AppBar position='sticky'>
          <Toolbar className={classes.headerStyles}>
            <img alt='company logo' className={classes.logo} src={logo} />
            <Typography variant='h6'  className={classes.title}>
              My Posts
            </Typography>

            <div className={classes.account}>
              <Button
                className={(classes.acountLabel)}
                disableRipple
              >
                <Avatar
                  alt='user avatar'
                  src={profileIcon}
                  className={classes.avatar}
                ></Avatar>
                Maya
              </Button>
              <Button
                className={(classes.button, classes.logoutButton)}
                disableRipple
              >
                <ExitToAppIcon className={classes.logout} />
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* <div style={{ marginTop: "60px" }}>
        
      </div> */}
    </React.Fragment>
  );
};

export default Header;
