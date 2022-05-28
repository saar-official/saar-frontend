import { Typography, Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CardFeed from "./cardFeed";
import axios from "axios";

export default function Students() {
  const [data, setData] = useState([]);
  const url = `http://localhost:8001/api/v1/summary/get-all/`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log("FRoM ML SERVICE", res.data);
        setData(res.data);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Feed - For nerds who follow news</title>
        <meta
          name="description"
          content="Get hired by top startups of India and give an exciting boost to your learning career"
        />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <main>
        {/* <Typography variant="h6">For Students</Typography> */}

        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          {data.map((news) => {
            return (
              <CardFeed
                data={{
                  ministry: news.ministry,
                  headline: news.heading,
                  link: news.link,
                  id: news.id,
                }}
              />
            );
          })}
          {/* <CardFeed
            data={{
              ministry: "Defence Ministry",
              headline: "India to capture POK in next 10 days",
              link: "https://www.xyz.com",
              id: "xyz",
            }}
          /> */}
        </Grid>
      </main>
    </>
  );
}
