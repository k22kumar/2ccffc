import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import PeopleBGImg from "../../assets/bg-img.png";
import BubbleIcon from "../../assets/bubble.svg";

// SideBanner styles
const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    height: "100%",
    background: `url(${PeopleBGImg})`,
    backgroundSize: "cover",
  },
  content: {
    position: "relative",
    height: "100%",
    background: "linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)",
    opacity: 0.85,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#FFFFFF",
  },
  bubbleContainer: {
    marginTop: "-28.5%",
  },
  text: {
    lineHeight: "40px",
    fontSize: "26px",
    width: "269px",
    marginTop: "40px",
    textAlign: "center"
  }
}));

// Component that is a decorative image used in the login/sign up screens
const SideBanner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.bannerContainer}>
      <Box className={classes.content}>
        <Box className={classes.bubbleContainer}>
          <img src={BubbleIcon} alt="Chat Bubble" />
        </Box>
        <Typography className={classes.text}>{"Converse with anyone with any language"}</Typography>
      </Box>
    </Box>
  );
};

export default SideBanner;
