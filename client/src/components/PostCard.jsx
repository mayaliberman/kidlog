import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Card, CardHeader, CardMedia, CardContent, CardActions, Button, Typography, IconButton, Avatar} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "15px",
    boxShadow: "0px 2px 14px rgba(0, 0, 0, 0.16)",
    borderRadius: "10px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 300,
    // paddingTop: "56.25%", // 16:9
  },
});

export default function PostCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
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
        image="   ../../src/assets/images/welcome-bg.png"
        title="Paella dish"
      />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}
