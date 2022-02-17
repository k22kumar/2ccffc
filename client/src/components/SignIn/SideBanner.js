import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import PeopleBGImg from "../../assets/bg-img.png";
import BubbleIcon from "../../assets/bubble.svg";

// SideBanner styles
const useStyles = makeStyles((theme) => ({
  imgContainer: {
    position: "relative"
  },
  content: {
    margin: "auto",
    width: "100%",
    height: "100%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    color: "#FFFFFF",
    background: "linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%);",
    opacity: 0.85,
  },
  bubbleContainer: {
    marginTop: "-28.5%",
    display: "flex",
    justifyContent: "center"
  },
  text: {
    fontSize: "26px",
    width: "269px",
    marginTop: "40px",
    textAlign: "center"
  }
}));

// Component that is a decorative image used in the login/sign up screens
const SideBanner = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.imgContainer}>
      <Box className={classes.content}>
        <Box className={classes.bubbleContainer}>
          <img src={BubbleIcon} alt="Chat Bubble" />
        </Box>
        <Typography className={classes.text}>{"Converse with anyone with any language"}</Typography>
      </Box>
        <img src={PeopleBGImg} alt="Group of people smiling and chatting together" />
    </Box>
  );
};

export default SideBanner;
