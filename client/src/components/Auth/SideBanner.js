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
    backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
  },
  content: {
    height: "100%",
    background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, #86B9FF 100%)`,
    opacity: 0.85,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#FFFFFF",
  },
  bubbleContainer: {
    marginTop: "-22.5%",
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      marginTop: "-48.5%",
    },
  },
  text: {
    lineHeight: "40px",
    fontSize: theme.typography.heading.normal,
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
        <Typography className={classes.text}>
          {"Converse with anyone with any language"}
        </Typography>
      </Box>
    </Box>
  );
};

export default SideBanner;
