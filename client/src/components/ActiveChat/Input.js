import React, { useState } from "react";
import { FormControl, FilledInput, InputAdornment, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { PreviewPic } from "./index";
import axios from "axios";

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
    overflowX: "auto",
    marginTop: theme.spacing(5)
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

  const uploadPic = async (selectedPic) => {
    const formData = new FormData();
    formData.append('file', selectedPic);
    formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);

    const res = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`, formData,
    {
      transformRequest: [function (data, headers) {
      delete headers['x-access-token'];
      return data;
    }],
    });

    return res.data.secure_url;
  };

  const uploadSelectedPics = async () => {
    const newUploadedPics = [];
      selectedPics.forEach(selectedPic => {
        const generateURL = async () => {
          const newURL = await uploadPic(selectedPic);
          return newURL;
        }
        newUploadedPics.push(generateURL());
      });
      
      return Promise.all(newUploadedPics);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let uploadedPicsUrls = [];
    if (selectedPics && selectedPics.length > 0) {
      uploadedPicsUrls = await uploadSelectedPics();
    }
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: uploadedPicsUrls
    };
    await postMessage(reqBody);
    setSelectedPics([]);
    setText("");
  };

  const handleSelectImage = (files) => {
    const newSelectedPics = [...selectedPics];
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      file.uniqueKey = `${file.name}${Date.now()}`;
      newSelectedPics.push(file);
    }
    setSelectedPics(newSelectedPics);
  };

  const handleClose = (uniqueKey) => {
    let newSelectedPics = [...selectedPics];
    newSelectedPics = newSelectedPics.filter(selectedPic => selectedPic.uniqueKey !== uniqueKey);
    setSelectedPics(newSelectedPics);
  };

  return (
    <Box>
    {
      selectedPics && selectedPics.length > 0 && <Box className={classes.previewContainer}>
      {
        selectedPics.map((selectedPic) => <PreviewPic key={selectedPic.uniqueKey} onClose={handleClose} pic={selectedPic}/>)
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
          endAdornment={
            <InputAdornment position="end">
              <label className={classes.fileSelectorLabel} aria-label="File Selector">
                <AddCircleIcon className={classes.addIconStyles} fontSize={"large"}/>
                <input className={classes.fileSelector} type="file" multiple="multiple" onChange={(e) => handleSelectImage(e.target.files)}/>
              </label>
            </InputAdornment>
          }></FilledInput>
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
