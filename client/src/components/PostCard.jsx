import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  IconButton,
  Avatar,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Image from "../assets/welcome-bg.png";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    width: "40%",
    boxShadow: "0px 2px 14px rgba(0, 0, 0, 0.16)",
    "@media (max-width:1024px)": {
      width: "60%",
    },
    borderRadius: "10px",
    "@media (max-width:768px)": {
      width: "80%",
    },
    "@media (max-width:480px)": {
      width: "98%",
    },
  },

  title: {
    fontSize: 14,
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
});

export default function PostCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Box
      component="div"
      style={{ display: "flex", justifyContent: "center", margin: "10px" }}
    >
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
              Word of the Day Word of the Day Word of the Day Word of the Day
              Word of the Day Word of the Day Word of the Day Word of the Day
              Word of the Day
            </Typography>
          </Box>
          {/* <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
        </CardContent>
      </Card>
    </Box>
  );
}
