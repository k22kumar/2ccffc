import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  multiImageContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: theme.spacing(4.5),
    marginBottom: theme.spacing(4.5)
  },
  multiImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "104px",
    height: "90px",
    margin: ({ sender }) => sender ? theme.spacing(0, 0, 0, 3) : theme.spacing(0, 3, 0, 0),
    borderRadius: "10px 10px 0 10px",
    overflow: "hidden",
    "& img": {
      maxWidth: "100%"
    }
  }
}));

const MultipleImages = (props) => {
  const classes = useStyles({sender: props.sender});
  const { attachments } = props;
  
  return (
    <Box className={classes.multiImageContainer}>
      {
        attachments.map(attachement => <Box key={Date.now()} className={classes.multiImage}>
          <img src={attachement} alt={""}/>
        </Box>)
      }
    </Box>
  );
};

export default MultipleImages;