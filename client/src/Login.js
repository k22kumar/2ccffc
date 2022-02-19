import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "./store/utils/thunkCreators";
import { SideBanner, SignInOption, SignInForm } from "./components/SignIn";

// Login Styles
const useStyles = makeStyles((theme) => ({
  loginContainer: {
    height: "100vh"
  },
  bannerContainer: {
    /* Tablet screens and lower*/
    "@media (max-width: 960px)": {
      display: "none"
    }, 
  }
}));

const Login = (props) => {
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
        <Grid className={classes.bannerContainer} item md={5}>
          <SideBanner/>
        </Grid>
        <Grid item xs={12} md={7}>
            <SignInOption isLoggingIn={true} />
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
