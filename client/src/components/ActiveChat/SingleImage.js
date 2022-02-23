import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  singleImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
    height: "173px",
    borderRadius: "10px 10px 0 10px",
    overflow: "hidden",
    "& img": {
      maxWidth: "100%"
    }
  }
}));

const SingleImage = (props) => {
  const classes = useStyles();
  const { attachments } = props;
  
  return (
    <Box className={classes.singleImage}>
      <img src={attachments[0]} alt={""}/>
    </Box>
  );
};

export default SingleImage;