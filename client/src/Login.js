import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "./store/utils/thunkCreators";
import { SideBanner, AuthOption, AuthForm } from "./components/Auth";

// Login Styles
const useStyles = makeStyles((theme) => ({
  loginContainer: {
    height: "100vh"
  },
  bannerContainer: {
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      display: "none"
    }
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
        <Grid className={classes.bannerContainer} item md={5} lg={4}>
          <SideBanner/>
        </Grid>
        <Grid item s={12} md={7} lg={8}>
            <AuthOption isLoggingIn={true} />
            <AuthForm newUser={false} handleSubmit={handleLogin}/>
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
