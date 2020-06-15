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
  const postDate = new Date(props.date);
  const year = postDate.getFullYear();
  const day = postDate.getDate();
  const monthIndex = postDate.getMonth();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const monthName = months[monthIndex];
  const lessonNum = `${monthName} ${day} , ${year} | Lesson ${props.lessonNum}`;

  const tags = props.lessonTags
    .map((tag) => tag.charAt(0).toUpperCase() + tag.substr(1))
    .join(', ');
 
  const postChild = `${tags} with ${props.childName}`;
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
          className={classes.header}
          avatar={
            <Avatar aria-label='recipe' className={classes.avatar}>
              {props.childName.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreHorizIcon />
            </IconButton>
          }
          title={postChild}
          subheader={lessonNum}
        />
        <CardMedia
          className={classes.media}
          image={props.defaultPhoto}
          title='Paella dish'
        />
        <CardContent>
          <Box>
            <Typography
              paragraph
              className={classes.title}
              variant='body2'
              color='textSecondary'
              component='p'
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
