import { Grid, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";

export default function Company() {
  return (
    <>
      <Helmet>
        <title>
          Company - Hire pre-vetted candidates across multiple domains with
          proven track record who are always up for building something new!
        </title>
        <meta
          name="description"
          content="Hire pre-vetted candidates across multiple domains with
          proven track record who are always up for building something new!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <main>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            Hello
          </Grid>
          <Grid item xs={12} md={6}>
            World
          </Grid>
        </Grid>
      </main>
    </>
  );
}
