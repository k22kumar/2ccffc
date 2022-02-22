import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

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
    marginLeft: theme.spacing(3),
    borderRadius: "10px 10px 0 10px",
    overflow: "hidden",
    "& img": {
      maxWidth: "100%"
    }
  }
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, attachments } = props;
  return (
    <Box className={classes.root}>
      {
        (attachments.length === 1 && attachments || !attachments) && <Typography className={classes.date}>{time}</Typography>
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
      {
        attachments && attachments.length > 1 && <Box className={classes.multiImageContainer}>
          {
            attachments.map(attachement => <Box className={classes.multiImage}>
              <img src={attachement}/>
            </Box>)
          }
        </Box>
      }
      {
        attachments.length > 1 && <Typography className={classes.date}>{time}</Typography>
      }
    </Box>
  );
};

export default SenderBubble;
