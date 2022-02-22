import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative"
    },
    imgContainer: {
        width: "90px",
        height: "90px",
        "& img": {
            maxWidth: "100%"
        },
        margin: theme.spacing(5),
        overflow: "hidden",
        borderRadius: "10px 10px 0 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    close: {
        position: "absolute",
        top: 0,
        right: 0,
        color: "#D1D9E6",
        minWidth: "initial",
        borderRadius: "50%",
        padding: "3px"
    }
}));

const PreviewPic = (props) => {
    const classes = useStyles();
    const { onClose, pic, picIndex } = props;
    const [picURL, setPicURL] = useState(undefined);
    
    useEffect(() => {
        setPicURL(URL.createObjectURL(pic));
        // free url from memory
        return () => {
            URL.revokeObjectURL(picURL);
        }
    }, []);

    return (
        <Box className={classes.root}>
            <Button className={classes.close} onClick={() => onClose(picIndex)}>
                <CancelIcon fontSize={"large"}/>
            </Button>
            <Box className={classes.imgContainer}>
                <img src={picURL} alt={pic.name}/>
            </Box>
        </Box>
    );
};

export default PreviewPic;