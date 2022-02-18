import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Box,
    Button,
    Grid,
    FormControl,
    TextField,
    Typography,
    InputAdornment
} from "@material-ui/core";
import { Link } from "react-router-dom";

// SignInForm styles
const useStyles = makeStyles((theme) => ({
    formContainer: {
        maxWidth: "400px",
        margin: "86px auto 0 97px",
    },
    heading: {
        fontSize: "26px",
        fontWeight: 600,
        lineHeight: "40px",
        letterSpacing: "0px",
        textAlign: "left"
    },
    formControl: {
        width: "100%",
        marginTop: "12px",
        marginBottom: "28px"
    },
    input: {
        paddingTop: "20px",
    },
    link: {
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: "12px",
        lineHeight: "16px"
    },
    form: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        color: theme.palette.primary.main
    },
    button: {
        marginTop: "12px",
        background: theme.palette.primary.main,
        borderRadius: "3px",
        color: "#FFFFFF",
        padding: "18px 58px 14px 58px",
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: "24px"
    }
}));

// Component that is a decorative image used in the login/sign up screens
const SignInForm = (props) => {
const classes = useStyles();
const { newUser } = props;

return (
    <Box className={classes.formContainer}>
        <Typography variant="h1" className={classes.heading}>
            {newUser ? "Create an account." : "Welcome back!"}
        </Typography>
        <form className={classes.form} onSubmit={() => props.handleSubmit()}>
            {
                newUser && <FormControl className={classes.formControl}>
                    <TextField
                        InputProps={{
                            className: classes.input,
                        }}
                        
                        aria-label="username"
                        label="Username"
                        name="username"
                        type="text"
                        required
                    />
                </FormControl>
            }
            <FormControl className={classes.formControl} required>
                <TextField
                    InputProps={{
                            className: classes.input,
                        }}
                    aria-label="E-mail address"
                    label="E-mail address"
                    name="username"
                    type="text"
                />
            </FormControl>
            <FormControl className={classes.formControl} required>
                {
                    newUser ?
                    <TextField
                        InputProps={{
                            className: classes.input,
                        }}
                        label="Password"
                        aria-label="password"
                        type="password"
                        name="password"
                    />
                :
                <TextField
                    label="Password"
                    aria-label="password"
                    type="password"
                    name="password"
                    InputProps={{
                        className: classes.input,
                        endAdornment: <InputAdornment position="end">
                            <Link className={classes.link}>
                                Forgot?
                            </Link>
                        </InputAdornment>,
                    }}
                />
                }
            </FormControl>
            <Button type="submit" className={classes.button} variant="contained" size="large">
                {newUser ? "Create" : "Login"}
            </Button>
        </form>
    </Box>
);
};

export default SignInForm;
