"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ImagesContent = ({ settings }) => {
  return (
    <Box my={3}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className="card">
          <Image
            className="content"
            src={settings[1]?.data?.image2}
            alt="image1"
            width={500}
            height={500}
          />
          {/* <Image
            className="content"
            src={"/2.jpg"}
            alt="image1"
            width={500}
            height={500}
          /> */}
        </Grid>
        <Grid item xs={12} sm={6} className="card">
          <Image
            className="content"
            src={settings[1]?.data?.image3}
            alt="image1"
            width={500}
            height={500}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImagesContent;
