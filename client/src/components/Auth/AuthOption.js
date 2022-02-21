import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";

// AuthOption styles
const useStyles = makeStyles((theme) => ({
  optionContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(15),
    [theme.breakpoints.down(theme.breakpoints.values.s)]: {
      justifyContent: "center"
    }
  },
  description: {
    marginLeft: "auto",
    marginRight: theme.spacing(15),
    fontWeight: 400,
    fontSize: theme.typography.fontSize,
    lineHeight: "19.07px",
    color: theme.palette.secondary.main,
    textAlign: "center",
    [theme.breakpoints.down(theme.breakpoints.values.s)]: {
      marginLeft: 0
    }
  },
  button: {
    marginRight: theme.spacing(21),
    boxShadow: "0px 2px 12px 0px #4A6A9533",
    padding: theme.spacing(8, 26, 10, 26),
    color: theme.palette.primary.main,
    [theme.breakpoints.down(theme.breakpoints.values.s)]: {
      padding: theme.spacing(4, 13, 4, 13),
      fontSize: theme.typography.fontSize,
      marginRight: 0
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
          isLoggingIn ? "Don't have an account?" : "Already have an account?"
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
