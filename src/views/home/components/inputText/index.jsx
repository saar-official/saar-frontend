import { Box, TextField } from "@mui/material";
import React from "react";

export default function InputText({ disabled, changeHandler }) {
  return (
    <Box sx={{ pt: 2 }}>
      <TextField
        disabled={disabled}
        id="outlined-basic"
        label="Enter a press release"
        multiline
        rows={10}
        fullWidth
        variant="outlined"
        onChange={changeHandler}
      />
    </Box>
  );
}
