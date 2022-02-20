import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Box,
    Button,
    Grid,
    FormControl,
    FormHelperText,
    TextField,
    Typography,
    InputAdornment
} from "@material-ui/core";
import { Link } from "react-router-dom";

// AuthForm styles
const useStyles = makeStyles((theme) => ({
    formContainer: {
        maxWidth: "400px",
        margin: "86px auto 106px 97px",
        // Tablet screens and lower
        "@media (max-width: 960px)": {
            margin: "86px auto auto auto"
        },
        // Phones
        "@media (max-width: 750px)": {
            margin: "70px 30px 0 30px",
            maxWidth: "none",
        },
    },
    heading: {
        fontSize: "26px",
        fontWeight: 600,
        lineHeight: "40px",
        letterSpacing: "0px",
        textAlign: "left",
        "@media (max-width: 750px)": {
            fontSize: "20px"
        },
    },
    formControl: {
        width: "100%",
        marginTop: "12px",
        marginBottom: "28px",
        "@media (max-width: 750px)": {
            marginTop: "10px",
            marginBottom: "10px",
        },
    },
    input: {
        paddingTop: "20px",
        "@media (max-width: 750px)": {
            paddingTop: "10px",
            fontSize: "14px"
        },
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
        lineHeight: "24px",
        "@media (max-width: 750px)": {
            padding: "9px 27px 7px 27px",
            fontSize: "14px"
        },
    }
}));

// Component that is a decorative image used in the login/sign up screens
const AuthForm = (props) => {
const classes = useStyles();
const { newUser, handleSubmit, formErrorMessage } = props;

return (
    <Box className={classes.formContainer}>
        <Typography variant="h1" className={classes.heading}>
            {newUser ? "Create an account." : "Welcome back!"}
        </Typography>
        <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
            <FormControl className={classes.formControl}>
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
            {
                newUser && <FormControl className={classes.formControl} required>
                <TextField
                    InputProps={{
                            className: classes.input,
                        }}
                    aria-label="E-mail address"
                    label="E-mail address"
                    name="email"
                    type="text"
                />
            </FormControl>
            }
            {
                newUser ?
                <>
                    <FormControl className={classes.formControl} error={!!formErrorMessage}>
                        <TextField
                            aria-label="password"
                            label="Password"
                            type="password"
                            inputProps={{ 
                                className: classes.input,
                                minLength: 6
                            }}
                            name="password"
                            required
                        />
                        <FormHelperText>
                            {formErrorMessage.confirmPassword}
                        </FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formControl} error={!!formErrorMessage}>
                    <TextField
                        label="Confirm Password"
                        aria-label="confirm password"
                        type="password"
                        inputProps={{
                            className: classes.input,
                            minLength: 6
                        }}
                        name="confirmPassword"
                        required
                    />
                    <FormHelperText>
                        {formErrorMessage.confirmPassword}
                    </FormHelperText>
                    </FormControl>
                </>
                :
                <FormControl className={classes.formControl} required>
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
                </FormControl>
            }
            
            <Button type="submit" className={classes.button} variant="contained" size="large">
                {newUser ? "Create" : "Login"}
            </Button>
        </form>
    </Box>
);
};

export default AuthForm;
