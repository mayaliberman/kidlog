import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  InputBase,
} from '@material-ui/core';

import PurpleButton from '../ui/PurpleButton';
import NumberInput from '../ui/NumberInput';

export const AddPost = () => {
  const classes = useStyles();
  return (
    <Box component='div' className={classes.box}>
      <Card className={classes.root}>
        <CardHeader
          className={classes.cardHeader}
          title='New Activity'
          titleTypographyProps={{
            style: { fontWeight: 'bold' },
          }}
        ></CardHeader>
        <CardContent className={classes.cardContent}>
          <Typography variant='h3'>
            Hello Maya, ready to add today's activity with your kid?
          </Typography>
          <form noValidate autoComplete='off' className={classes.formStyle}>
            <MultiLineTextField
              id='standard-multiline-static'
              label='Multiline'
              multiline
              rows={5}
              placeholder='Describe the activity with your kids'
              ></MultiLineTextField>
            <NumberInput />
            <PurpleButton type='submit' style={{ width: '50%' }}>
              Add Post
            </PurpleButton>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    margin: '70px 0px 20px 0px',
    width: '60%',
    boxShadow: '0px 2px 14px rgba(0, 0, 0, 0.16)',

    '@media (max-width:1024px)': {
      width: '80%',
    },
    borderRadius: '10px',
    '@media (max-width:768px)': {
      width: '98%',
    },
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '0px',
    paddingRight: '0px',
    marginBottom: '10px',
  },
  cardHeader: {
    textAlign: 'left',
    fontWeight: 'bold',
    backgroundColor: theme.palette.background.default,
  },
  formStyle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '20px',
  },
}));

const MultiLineTextField = withStyles((theme) => ({
  root: {
    fontSize: theme.typography.h5,
    paddingTop: '15px',
    width: '100%',
    padding: '15px',
    color: theme.palette.secondary.main,
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
}))(InputBase);
export default AddPost;
