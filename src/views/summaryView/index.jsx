import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress, Box, Typography, Divider } from "@mui/material";
import Chip from "@mui/material/Chip";
import "./index.css";

export default function SummaryView() {
  let text = window.location.href;
  const myArray = text.split("/");
  const id = myArray[myArray.length - 1];

  const [result, setResult] = useState({});
  const [error, setError] = useState("");
  const [highLights, setHighLights] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/v1/summary/get/${id}`)
      .then((res) => {
        console.log(res.data)
        setResult(res.data);
        // res.data.highlights = JSON.parse(res.data.highlights).reverse();

        // for (let i = 0; i < 3; i++) {
        //   if (res.data.highLights[i].length === 0) continue;
        //   else {
        //     setHighLights(res.data.highlights[i]);
        //     console.log(highLights);
        //     break;
        //   }
        // }
        res.data.highlights.map((highlight, idx) => {
          if (highlight.length !== 0) {
            setHighLights(highlight);
          }
        });
        // check this line when server runs
      })
      .catch((e) => {
        setError("SOMETHING WENT WRONG!!!!!");
      });
  }, []);

  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h6" gutterBottom>
        {result.ministry}
      </Typography>
      <Typography variant="h3" gutterBottom>
        {result.heading}
      </Typography>
      <Divider />
      <Typography variant="body1" gutterBottom>
        {result.summary}
      </Typography>
      <Typography variant="caption" gutterBottom>
        Key Highlights
      </Typography>

      <Box direction="row" flex="wrap" spacing={1}>
        {highLights.map((data) => {
          return (
            <Chip size="small" sx={{ m: 1 }} label={data} variant="outlined" />
          );
        })}
      </Box>
    </Box>
  );
}
