import { Box } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import { Landing, Summary } from "./components";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Saar - Summarise press release releases at ease</title>
        <meta
          name="description"
          content="Summarise press release releases at ease"
        />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Landing />
      <Summary />
    </>
  );
}
