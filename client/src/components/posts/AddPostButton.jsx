import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Button,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
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
    avatar: {
        backgroundColor: 'white',
        marginRight: '15px',
        height: '30px',
        width: '30px',
        '@media (max-width:480px)': {
            width: '18px',
            height: 'auto',
            marginRight: '5px',
        }
    }
}));

export const AddPostButton = () => {
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
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            padding: '20px 0',
          }}
        >
          <Typography variant='h3'>
            Hello Maya, ready to add today's activity with your kid?
          </Typography>
          <Button variant='contained' color='primary'>
            <AddIcon />
            <Typography> Add</Typography>
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddPostButton;
