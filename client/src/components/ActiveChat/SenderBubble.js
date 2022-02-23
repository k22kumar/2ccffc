import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { SingleImage, MultipleImages } from "./index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold"
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px"
  }
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, attachments } = props;
  const timeStampAtTop = attachments.length <= 1 || !attachments;
  return (
    <Box className={classes.root}>
      {
        timeStampAtTop && <Typography className={classes.date}>{time}</Typography>
      }
      <Box className={classes.bubble}>
        {
          (attachments && attachments.length === 1) && <SingleImage attachments={attachments}/>
        }
        {
          text !== "" && <Typography className={classes.text}>{text}</Typography>
        }
      </Box>
      {
        attachments && attachments.length > 1 && <MultipleImages attachments={attachments} sender={true}/>
      }
      {
        attachments.length > 1 && <Typography className={classes.date}>{time}</Typography>
      }
    </Box>
  );
};

export default SenderBubble;
