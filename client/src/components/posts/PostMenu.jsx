import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const StyledMenu = withStyles({
  paper: {
    //   position: 'absolute',
    border: '0px solid #d3d4d5',
    boxShadow: '0px 5px 14px rgba(0, 0, 0, 0.12)',
        borderRadius: '10px',
        paddingRight: '8px', 
    padding: ' 0 8px'
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.common.grey,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
    },
    
  
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },

  deleteText: {
    color: theme.palette.error.main,
    },
  
    editText: {
      color: theme.palette.secondary.main
  },
  divider: {
      borderTop: '1px solid  rgba(192, 209, 224, 0.2)'
    },
    horizonIcon: {
      color: theme.palette.secondary.light
  }
}));

export default function PostMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label='more'
        aria-controls='long-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreHorizIcon fontSize='default' className={classes.horizonIcon} />
      </IconButton>
      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <EditIcon fontSize='small' color='secondary' />
          </ListItemIcon>
          <ListItemText primary='Edit' className={classes.editText} />
        </StyledMenuItem>
        <StyledMenuItem className={classes.divider}>
          <ListItemIcon>
            <DeleteIcon fontSize='small' color='error' />
          </ListItemIcon>
          <ListItemText primary='Delete' className={classes.deleteText} />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
