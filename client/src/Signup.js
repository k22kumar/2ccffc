import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { register } from "./store/utils/thunkCreators";
import { SideBanner, AuthOption, AuthForm } from "./components/Auth";

// Signup Styles
const useStyles = makeStyles((theme) => ({
  loginContainer: {
    height: "100%"
  },
  bannerContainer: {
  /* Tablet screens and lower*/
    "@media (max-width: 960px)": {
      display: "none"
    }, 
  }
}));

const Login = (props) => {
  const history = useHistory();
  const { user, register } = props;
  const classes = useStyles();
  const [formErrorMessage, setFormErrorMessage] = useState({});


  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
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
            <AuthOption description={"Don't have an account?"} btnText={"Create Account"} handleOptionClick={() => history.push("/register")} />
            <AuthForm formErrorMessage={formErrorMessage} newUser={true} handleSubmit={handleRegister}/>
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
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
