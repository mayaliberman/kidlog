import React from 'react';
import PostsContainer from './PostsContainer';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import AddPost from './AddPost';

const PostsGallery = () => {
  const classes = useStyles();

  return (
    <Container>
      <AddPost />
      <PostsContainer />
      <Tooltip title='Add' aria-label='add'>
        <Fab color='primary' className={classes.fab} size='large'>
          <AddIcon />
        </Fab>
      </Tooltip>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'sticky',
    bottom: '10px',
    marginRight: '10px',
    float: 'right',
    '@media (min-width:768px)': {
      visibility: 'hidden',
    },
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
 
}));

export default PostsGallery;
