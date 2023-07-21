import Check from "@mui/icons-material/Check";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

import SectionImage from "../../public/business.jpg";

const Section = () => {
  return (
    <Box mt={{ xs: 0, md: 20 }}>
      <Typography
        variant="h2"
        textAlign={"center"}
        fontSize={{ xs: 36, md: 56 }}
        color={"red"}
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
          <Grid
            item
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            xs={12}
            md={4}
          >
            <Image
              src={"/loan-interest-time.svg"}
              alt="svg"
              height={100}
              width={100}
            />
            <Typography variant="body">No Co Maker</Typography>
          </Grid>

          <Grid
            item
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            xs={12}
            md={4}
          >
            <Image
              src={"/mortgage-loan-mortgage.svg"}
              alt="svg"
              height={100}
              width={100}
            />
            <Typography variant="body">Collateral-free loan</Typography>
          </Grid>

          <Grid
            item
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            xs={12}
            md={4}
          >
            <Image src={"/car-loan-3.svg"} alt="svg" height={100} width={100} />
            <Typography variant="body">Auto Loan</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Image
            alt="section-image"
            className="section-svg"
            src={SectionImage}
            width={500}
            height={500}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section;
