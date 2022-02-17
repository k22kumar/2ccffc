import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "./store/utils/thunkCreators";
import { SideBanner, SignInOption, SignInForm } from "./components/SignIn";

// Login Styles
const useStyles = makeStyles((theme) => ({
  loginContainer: {
    height: "100vh"
  }
}));

const Login = (props) => {
  const history = useHistory();
  const { user, login } = props;
  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid wrap="nowrap" className={classes.loginContainer} container justify="center">
        <Grid item xs={5}>
          <SideBanner/>
        </Grid>
        <Grid item xs={7}>
            <SignInOption description={"Don't have an account?"} btnText={"Create Account"} handleOptionClick={() => history.push("/register")} />
            <SignInForm newUser={false} handleSubmit={handleLogin}/>
        </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
