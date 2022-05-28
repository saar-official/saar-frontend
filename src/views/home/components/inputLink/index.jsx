import { Box, TextField, Typography } from "@mui/material";
import React from "react";

export default function InputLink({ changeHandler }) {
  return (
    <Box sx={{ p: 1 }}>
      <TextField
        variant="outlined"
        fullWidth
        label="Enter link to press release"
        placeholder="eg. https://pib.gov.in/PressReleasePage.aspx?PRID=1805516"
        onChange={changeHandler}
      />
    </Box>
  );
}
