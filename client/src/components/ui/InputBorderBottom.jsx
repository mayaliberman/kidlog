import React from 'react';
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const InputBorderBottom = withStyles((theme) => ({
  root: {
    padding: '10px 0',
    width: '100%',
    '& label': {
      color: theme.palette.common.white,
    },
    '& label.Mui-focused': {
      color: theme.palette.common.white,
    },
  },
}))(TextField);

export default InputBorderBottom;
