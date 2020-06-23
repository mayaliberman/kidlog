import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  InputBase,
  Button,
} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NumberInput from '../ui/NumberInput';

export const AddPost = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
          <form noValidate autoComplete='off' className={classes.formStyle}>
            <MultiLineTextField
              id='standard-multiline-static'
              label='Multiline'
              multiline
              rows={5}
              placeholder='Describe the activity with your kids'
            ></MultiLineTextField>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                borderTop: '1px solid rgba(192, 209, 224, 0.4)',
                margin: '30px 0',
              }}
            >
              <NumberInput />
              <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-label'>Kid</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Michal</MenuItem>
                  <MenuItem value={20}>Eyal</MenuItem>
                  <MenuItem value={30}>Danielle</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button type='submit' className={classes.button}>
              Add Post
            </Button>
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

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color: 'black',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    '@media (min-width:768px)': {
      width: '50%',
    },
    margin: '30px auto',
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
