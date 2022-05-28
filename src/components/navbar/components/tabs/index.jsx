import styled from "@emotion/styled";
import { Tab, Tabs } from "@mui/material";
import React from "react";
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))(({ theme }) => ({
  // width: "100%",
  // backgroundColor: "rgba(0,0,0,0)",
  // borderRadius: "10px",
  // // boxShadow: "rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px",
  // // marginBottom: "2rem",
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    position: "relative",
    bottom: 20,
  },
  "& .MuiTabs-indicatorSpan": {
    width: "50%",
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    color: theme.palette.text.secondary,
    height: 80,
    textDecoration: "none",
    textTransform: "none",
    "&.Mui-selected": {
      color: theme.palette.primary.main,
    },
    "&.Mui-focusVisible": {
      // backgroundColor: "blue",
    },
  })
);

export { StyledTabs, StyledTab };
