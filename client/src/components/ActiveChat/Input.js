import React, { useState } from "react";
import { FormControl, FilledInput, InputAdornment, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { PreviewPic } from "./index";

const useStyles = makeStyles((theme) => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 5
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20
  },
  fileSelector: {
    display: "none"
  },
  fileSelectorLabel: {
    cursor: "pointer"
  },
  addIconStyles: {
    fontSize: "2rem",
    color: "#D1D9E6"
  },
  previewContainer: {
    height: "130px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    overflowX: "auto"
  }
}));

const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [selectedPics, setSelectedPics] = useState([]);
  const { postMessage, otherUser, conversationId, user } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user
    };
    await postMessage(reqBody);
    setText("");
  };

  const handleSelectImage = (files) => {
    const newSelectedPics = [...selectedPics];
    newSelectedPics.push(files[0]);
    setSelectedPics(newSelectedPics);
  };

  const handleClose = (index) => {
    const newSelectedPics = [...selectedPics];
    newSelectedPics.splice(index, 1);
    setSelectedPics(newSelectedPics);
  };

  return (
    <Box>
    {
      selectedPics && selectedPics.length > 0 && <Box className={classes.previewContainer}>
      {
        selectedPics.map((selectedPic, index) => <PreviewPic key={index} onClose={handleClose} picIndex={index} pic={selectedPic}/>)
      }
    </Box>
    }
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={<InputAdornment position="end">
                            <label className={classes.fileSelectorLabel} aria-label="File Selector">
                              <AddCircleIcon className={classes.addIconStyles} fontSize={"large"}/>
                              <input className={classes.fileSelector} type="file" onChange={(e) => handleSelectImage(e.target.files)}/>
                            </label>
                        </InputAdornment>}
        />
      </FormControl>
    </form>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
