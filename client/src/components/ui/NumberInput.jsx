import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, InputBase } from '@material-ui/core';

const NumberInput = () => {
     const classes = useStyles();
    return (
      <FormControl className={classes.root}>
        <InputLabel htmlFor='demo-customized-textbox' color='primary' className={classes.label}>
          Lesson Number
        </InputLabel>
            <BootstrapInput id='standard-number' label='Number' type='number' className={classes.root}/>
      </FormControl>
    );
}

const BootstrapInput = withStyles((theme) => ({
  root: {
    margin: ' 30px 15px',
    'label + &': {
        marginTop: theme.spacing(3),
        // width: '40%'
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.secondary.dark,
   
  },

  label: {
    marginTop: '10px',
    paddingRight: '20px',
    color: theme.palette.secondary.dark,
    fontSize: theme.typography.body1,
  },
}));

export default NumberInput
