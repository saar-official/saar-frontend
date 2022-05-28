import {
  Alert,
  CircularProgress,
  Snackbar,
  ToggleButtonGroup,
} from "@mui/material";
import { ToggleButton } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box, TextField } from "@mui/material";
import { useState } from "react";
import InputLink from "../inputLink";
import InputText from "../inputText";
import Chip from "@mui/material/Chip";
import { useNavigate } from 'react-router-dom'

import Fetch from "../../../../api";
import axios from "axios";

export default function Summary() {
  const navigate = useNavigate()
  const [selector, setSelector] = useState("link");
  const [selectorDisabled, setSelectorDisabled] = useState(false);
  const [fieldValue, setFieldValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [highLights, setHighLights] = useState([]);
  const [error, setError] = useState(false);

  const handleClose = () => {
    setError(false);
  };
  const toggleSelector = () => {
    selector === "text" ? setSelector("link") : setSelector("text");
  };

  const changeHandler = (e) => {
    setFieldValue(e.target.value);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    if (selector === "text") {
      URL = "http://localhost:8001/api/v1/summary/get-summary-from-text/";
      const body = {};
      body[selector] = fieldValue;
      // api call using axios
      axios
        .post(URL, body)
        .then((res) => {
          setIsLoading(false);
          setData(res.data.summary);
          setSelectorDisabled(true);
        })
        .catch((e) => {
          setIsLoading(false);
          setError(`${e}`);
          console.error(e);
        });
    } else if (selector === "link") {
      URL = "http://localhost:8001/api/v1/summary/get-summary-from-link/";
      const body = {};
      body[selector] = fieldValue;
      // api call using axios
      console.log(URL, body);
      axios
        .post(URL, body)
        .then((res) => {
          setIsLoading(false);
          setData(res.data.summary);
          navigate(`/summary/${res.data.id}`)
          setSelectorDisabled(true);
        })
        .catch((e) => {
          setIsLoading(false);
          setError(`${e}`);
          console.error(e);
        });
    }
  };

  return (
    <Box
      sx={{ pt: 2, width: "100%" }}
      textAlign="center"
      justifyContent="center"
    >
      <Typography variant="h1" gutterBottom>
        Generate summary from
      </Typography>
      <ToggleButtonGroup
        color="primary"
        value={selector}
        exclusive
        onChange={toggleSelector}
        disabled={selectorDisabled}
      >
        <ToggleButton value="text">Text</ToggleButton>
        <ToggleButton value="link">Link</ToggleButton>
      </ToggleButtonGroup>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={error}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
      {/* {error && (
        <div
          style={{
            color: "red",
            display: "flex",
            justifyContent: "center",
            fontSize: "30px",
          }}
        >
          {error}
        </div>
      )} */}

      {selectorDisabled && (
        <Button
          disabled={!selectorDisabled}
          onClick={() => setSelectorDisabled(false)}
          style={{
            display: "flex",
          }}
        >
          Reset
        </Button>
      )}

      <Box>
        {isLoading ? (
          <CircularProgress />
        ) : selector === "text" ? (
          <InputText
            disabled={selectorDisabled}
            changeHandler={changeHandler}
          />
        ) : (
          <InputLink
            disabled={selectorDisabled}
            changeHandler={changeHandler}
          />
        )}
      </Box>
      <Button disabled={selectorDisabled} onClick={handleSubmit}>
        Generate Summary
      </Button>

      <Box sx={{ mt: 2 }}>
        {data && (
          <Typography variant="body1" gutterBottom>
            {JSON.stringify(data)}
          </Typography>
        )}
      </Box>

      <Box direction="row" flex="wrap" spacing={1}>
        {highLights.map((dataHighLights) => {
          return (
            <Chip
              size="small"
              sx={{ m: 1 }}
              label={dataHighLights}
              variant="outlined"
            />
          );
        })}
      </Box>
    </Box>
  );
}
