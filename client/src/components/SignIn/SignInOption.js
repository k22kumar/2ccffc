import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";

// SignInOption styles
const useStyles = makeStyles((theme) => ({
  optionContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "30px",
},
description: {
    marginLeft: "auto",
    marginRight: "30px",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "19.07px",
    color: "#B0B0B0",
    textAlign: "center"
},
button: {
    marginRight: "42px",
    boxShadow: "0px 2px 12px 0px #4A6A9533",
      padding: "16px 33px 19px 34px",
      color: "#3A8DFF",
  }
}));

// Component that allows user to switch between login and sign up screens
const SignInOption = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.optionContainer}>
      <Typography className={classes.description}>
        {props.description}
      </Typography>
      <Button className={classes.button} onClick={() => props.handleOptionClick()}>
        {props.btnText}
      </Button>
    </Box>
  );
};

export default SignInOption;
