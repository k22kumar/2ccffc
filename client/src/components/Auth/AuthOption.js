import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";

// AuthOption styles
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
    color: theme.palette.secondary.main,
    textAlign: "center"
  },
  button: {
    marginRight: "42px",
    boxShadow: "0px 2px 12px 0px #4A6A9533",
    padding: "16px 33px 19px 34px",
    color: theme.palette.primary.main,
    "@media (max-width: 750px)": {
            padding: "8px 16px 8px 17px",
            fontSize: "14px"
        }
  }
}));

// Component that allows user to switch between login and sign up screens
const AuthOption = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { isLoggingIn } = props;

  const handleClick = () => {
    isLoggingIn ? history.push("/register") : history.push("/login");
  };

  return (
    <Box className={classes.optionContainer}>
      <Typography className={classes.description}>
        {
          isLoggingIn ? "Don't have an account?" : "Need to log in?"
        }
      </Typography>
      <Button className={classes.button} onClick={handleClick}>
        {
          isLoggingIn ? "Create Account" : "Login"
        }
      </Button>
    </Box>
  );
};

export default AuthOption;
