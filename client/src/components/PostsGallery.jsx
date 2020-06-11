import React, {useState, useEffect} from "react";
import PostsContainer from './PostsContainer';
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import {Typography, Container, Button } from "@material-ui/core";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "sticky",
    bottom: "10px",
    marginRight: "10px",
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

  button: { paddingTop: "30px", paddingBottom: '30px', "&:hover": { backgroundColor: "transparent" } },
}));

const PostsGallery = () => {

  const classes = useStyles();
 
  return (
    <Container
      style={{ textAlign: "center", paddingRight: "5px", paddingLeft: "5px" }}
    >
      <Button className={classes.button}>
        <Typography style={{ textTransform: "none" }} color="secondary">
          + Add an experience with your kids
        </Typography>
      </Button>
      <PostsContainer />
            <Tooltip title="Add" aria-label="add">
        <Fab color="primary" className={classes.fab} size="large">
          <AddIcon />
        </Fab>
      </Tooltip>
    </Container>
  );
};

export default PostsGallery;
