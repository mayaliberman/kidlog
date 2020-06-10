import React from 'react';
import PostCard from './PostCard';
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "sticky",
    bottom: '10px',
    marginRight: '10px',
    float: "right",
    "@media (min-width:768px)": {
      visibility: "hidden",
    },
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}));

const PostsGallery = () => {
  const classes = useStyles();
    return (
      <>
        <PostCard />
        <PostCard />
        <PostCard />
        <Tooltip title="Add" aria-label="add">
          <Fab color="primary" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </>
    );
};

export default PostsGallery;