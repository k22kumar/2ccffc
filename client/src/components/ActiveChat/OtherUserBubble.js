import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6
  },
  usernameDate: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5
  },
  bubble: {
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "0 10px 10px 10px"
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: -0.2,
    padding: 8
  },
  singleImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
    height: "173px",
    borderRadius: "10px 10px 0 10px",
    overflow: "hidden",
    "& img": {
      maxWidth: "100%"
    }
  },
  multiImageContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: theme.spacing(4.5),
    marginBottom: theme.spacing(4.5)
  },
  multiImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "104px",
    height: "90px",
    marginRight: theme.spacing(3),
    borderRadius: "10px 10px 0 10px",
    overflow: "hidden",
    "& img": {
      maxWidth: "100%"
    }
  }
}));

const OtherUserBubble = (props) => {
  const classes = useStyles();
  const { text, time, otherUser, attachments } = props;
  const timeStampAtTop = attachments.length <= 1 || !attachments;
  return (
    <Box className={classes.root}>
      <Avatar alt={otherUser.username} src={otherUser.photoUrl} className={classes.avatar}></Avatar>
      <Box>
        {
          timeStampAtTop  && <Typography className={classes.usernameDate}>{otherUser.username} {time}</Typography>
        }
        <Box className={classes.bubble}>
          {
            (attachments && attachments.length === 1) && <Box className={classes.singleImage}>
              <img src={attachments[0]}/>
            </Box>
          }
          {
            text !== "" && <Typography className={classes.text}>{text}</Typography>
          }
        </Box>
      </Box>
      {
        attachments && attachments.length > 1 && <Box>
          <Box className={classes.multiImageContainer}>
            {
              attachments.map(attachement => <Box className={classes.multiImage}>
                <img src={attachement}/>
              </Box>)
            }
          </Box>
          {
            attachments.length > 1 && <Typography className={classes.usernameDate}>{otherUser.username} {time}</Typography>
          }
        </Box>
      }
    </Box>
  );
};

export default OtherUserBubble;
