import Check from "@mui/icons-material/Check";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import SectionImage from "../../public/business.jpg";

const Section = () => {
  return (
    <Box mt={{ xs: 0, md: 30 }} id="why" className="card">
      <Typography
        variant="h2"
        textAlign={"center"}
        fontSize={{ xs: 36, md: 56 }}
        color={"red"}
        mt={{ xs: 10, md: 0 }}
      >
        Why Choose Us?
      </Typography>

      <Grid container>
        <Grid
          item
          container
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          xs={12}
          md={6}
          p={5}
        >
          <Grid item container xs={12} md={12} className="card">
            <Grid
              item
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              xs={12}
              md={6}
              my={{ xs: 2, md: 0 }}
            >
              <Image src={"/no-user.png"} alt="svg" height={100} width={100} />
              <Typography variant="body">No Co-Maker Required</Typography>
            </Grid>

            <Grid
              item
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              xs={12}
              md={6}
              my={{ xs: 2, md: 0 }}
            >
              <Image
                src={"/no-camera.png"}
                alt="svg"
                height={100}
                width={100}
              />
              <Typography variant="body">No Collateral required</Typography>
            </Grid>
          </Grid>

          <Grid item container xs={12} md={12}>
            <Grid
              item
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              xs={12}
              md={6}
              my={{ xs: 2, md: 0 }}
            >
              <Image
                src={"/low-price.png"}
                alt="svg"
                height={100}
                width={100}
              />
              <Typography variant="body">Low Interest Rate</Typography>
            </Grid>

            <Grid
              item
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              xs={12}
              md={6}
              my={{ xs: 2, md: 0 }}
            >
              <Image
                src={"/checklist.png"}
                alt="svg"
                height={100}
                width={100}
              />
              <Typography variant="body">Minimal Requirements</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-around"}
          className="card"
        >
          <Image
            alt="section-image"
            className="section-svg"
            src={SectionImage}
            width={200}
            height={200}
          />
          <Typography
            variant="h3"
            textAlign={{ xs: "center", md: "center" }}
            sx={{ textDecoration: "underline" }}
            fontSize={{ xs: 26, md: 30 }}
          >
            Excellent Client Service
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section;
