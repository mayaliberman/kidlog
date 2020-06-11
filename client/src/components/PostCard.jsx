import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Avatar,
  Box
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Image from "../assets/welcome-bg.png";

const useStyles = makeStyles({
  root: {
    width: "60%",
    boxShadow: "0px 2px 14px rgba(0, 0, 0, 0.16)",
    "@media (max-width:1024px)": {
      width: "80%",
    },
    borderRadius: "10px",
    "@media (max-width:768px)": {
      width: "98%",
    },
  },
  header: { textAlign: "left"},
  title: {
    fontSize: 14,
    textAlign: "left",
    "@media (max-width:768px)": {
      width: "95%",
    },
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 400,
    width: "95%",
    margin: "auto",
    borderRadius: "15px",
    "@media (max-width:768px)": {
      height: 350,
    },
    "@media (max-width:480px)": {
      height: 321,
    },
  },
  subheader: {
    color: 'red'
  }
});

export default function PostCard(props) {


  const classes = useStyles();

  return (
    <Box
      component="div"
      style={{
        display: "flex",
        justifyContent: "center",
        paddingLeft: "0px",
        paddingRight: "0px",
        marginBottom: "10px",
      }}
    >
      <Card className={classes.root}>
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              RL
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreHorizIcon />
            </IconButton>
          }
          title="Karate with Ashley"
          subheader="September 14, 2016 | Lesson 84"
                   
        />
        <CardMedia
          className={classes.media}
          image={Image}
          title="Paella dish"
        />
        <CardContent>
          <Box>
            <Typography
              paragraph
              className={classes.title}
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
             {props.desc}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
