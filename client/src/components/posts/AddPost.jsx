import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Button,
  InputBase,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import profileIcon from '../../assets/image-4.svg';
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';

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
    '& .MuiInputBase-root-127': {
      width: '90%',
    },
    '& .MuiFormControl-root-142': {
      width: '90%',
      display: 'block',
      marginLeft: '50px',
    },
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    marginLeft: '50px',
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
}))(InputBase);
export const AddPost = () => {
  const classes = useStyles();
  return (
    <Box
      component='div'
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '0px',
        paddingRight: '0px',
        marginBottom: '10px',
      }}
    >
      <Card className={classes.root}>
        <CardHeader
          title='New Activity'
          titleTypographyProps={{
            style: { textAlign: 'left', fontWeight: 'bold' },
          }}
          style={{ backgroundColor: '#F8F8F8' }}
        ></CardHeader>
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            //   flexWrap: 'wrap',
            justifyContent: 'space-around',
            padding: '20px 0',
          }}
        >
          <form noValidate autoComplete='off'>
            <Typography variant='h3'>
              Hello Maya, ready to add today's activity with your kid?
            </Typography>

            <InputBase
              id='standard-multiline-static'
              label='Multiline'
              multiline
              rows={5}
              placeholder='Describe the activity with your kids'
              InputLabelProps={{
                style: {
                  color: '#C0D1E0',
                  fontSize: '14px',
                  paddingLeft: '10px',
                  paddingTop: '5px',
                  width: '100%',
                },
              }}
              inputProps={{
                style: {
                  fontSize: '14px',
                  padding: '15px',
                  color: '#6F8BA4',
                },
              }}
            ></InputBase>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor='demo-customized-textbox' color='primary'>
                Lesson Number
              </InputLabel>
              <BootstrapInput
                id='standard-number'
                label='Number'
                type='number'
              />
            </FormControl>
            
            <Button
              variant='contained'
              color='primary'
              style={{
                display: 'block',
                padding: '15px 80px',
                margin: '30px auto',
                textTransform: 'uppercase',
                width: '60%',
              }}
            >
              Add Post
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddPost;
