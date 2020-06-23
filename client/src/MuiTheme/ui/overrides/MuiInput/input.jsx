export default {
  underline: {
    '&:before': {
      borderBottom: 'white',
    },
    '&:after': {
      borderBottom: 'white',
    },

    '&:hover:not($disabled):not($focused):not($error):before': {
      borderBottom: `none`,
    },

    '&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before': {
      borderBottom: 'none',
    },
  },

  root: {
    fontSize: '20px',
    color: 'white',
    // paddingBottom: '5px',
    borderBottom: `1px solid white`,
    whiteSpace: 'nowrap',
    width: '100%',
    marginTop: '15px',

    '&:not(.Mui-disabled):hover::before': {
      borderColor: 'white',
    },
    '& label.Mui-focused': {
      color: 'green',
    },
    '&$focused': {
      borderBottom: `1px solid white`,
    },
  },
  
};