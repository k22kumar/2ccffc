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
        margin: theme.spacing(43, "auto", 53, 49),
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(43, "auto", "auto", "auto")
        },
        [theme.breakpoints.down('s')]: {
            margin: theme.spacing(35, 15, 0, 15),
            maxWidth: "none",
        },
    },
    heading: {
        fontSize: theme.typography.heading.normal,
        fontWeight: 600,
        lineHeight: "40px",
        letterSpacing: "0px",
        textAlign: "left",
        [theme.breakpoints.down('s')]: {
            fontSize: theme.typography.heading.mobile
        },
    },
    formControl: {
        width: "100%",
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(14),
        [theme.breakpoints.down('s')]: {
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(5),
        },
    },
    input: {
        paddingTop: theme.spacing(10),
        [theme.breakpoints.down('s')]: {
            paddingTop: theme.spacing(5),
            fontSize: theme.typography.fontSize
        },
    },
    link: {
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: theme.typography.link.fontSize,
        lineHeight: "16px"
    },
    form: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        color: theme.palette.primary.main
    },
    button: {
        marginTop: theme.spacing(6),
        background: theme.palette.primary.main,
        borderRadius: "3px",
        color: "#FFFFFF",
        padding: theme.spacing(9, 29,7, 29),
        fontWeight: 700,
        fontSize: theme.typography.button.fontSize,
        lineHeight: "24px",
        [theme.breakpoints.down('s')]: {
            padding: theme.spacing(5, 14, 4, 14),
            fontSize: theme.typography.fontSize
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
