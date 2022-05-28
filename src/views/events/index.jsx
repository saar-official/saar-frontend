import { Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";

export default function Events() {
  return (
    <>
      <Helmet>
        <title>
          Brightern | Events - Upgrade your skills by learning from
          best-in-class mentors to make you industry-ready. Keep an eye out,
          there's always something happening over here
        </title>
        <meta
          name="description"
          content="Upgrade your skills by learning from best-in-class mentors to make you industry-ready. Keep an eye out, there's always something happening over here"
        />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <main>
        <Typography variant="h6">Events</Typography>
      </main>
    </>
  );
}
