"use client";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Youtube from "@mui/icons-material/YouTube";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Box
      id="footer"
      sx={{
        background:
          "linear-gradient(0deg, rgba(255,63,70,1) -50%, rgba(255,0,0,1) 75%)",
        color: "white",
        padding: 2,
      }}
      className="card"
    >
      <Grid container>
        <Grid item xs={12} md={4} mt={{ xs: 2, md: 0 }}>
          <Typography variant="h4">RSBC</Typography>

          <Stack>
            <Typography variant="body" fontSize={{ xs: 12, md: 16 }}>
              rsbcprimesmarketing@gmail.com
            </Typography>

            <Typography variant="body" fontSize={{ xs: 12, md: 16 }}>
              Makapilapil, San Ildefonso, Philippines
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} md={4} mt={{ xs: 2, md: 0 }}>
          <Stack>
            <Typography variant="h4">Socials</Typography>

            <Link
              href={"https://www.facebook.com/profile.php?id=100092522162147"}
              target="_blank"
            >
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"start"}
                sx={{
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, rgba(212,6,14,1) 0%, rgba(255,0,0,1) 100%)", // Replace with your desired gradient on hover
                    color: "darkgoldenrod",
                  },
                }}
              >
                <Facebook />
                <Typography variant="body" ml={1} fontSize={{ xs: 12, md: 16 }}>
                  RSBC Bulacan Primes Marketing Consulting
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Grid>

        <Grid item xs={12} md={4} mt={{ xs: 2, md: 0 }}>
          <Typography variant="h4">Business Hours</Typography>

          <Stack>
            <Typography fontSize={{ xs: 12, md: 16 }}>
              OFFICE DAYS: Monday - Friday: 9:00 am - 5:00 pm
            </Typography>

            <Typography fontSize={{ xs: 12, md: 16 }}>
              FOR INQUIRIES : Saturday: 10:00 am - 6:00 pm
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        textAlign={"center"}
        mt={2}
        fontSize={{ xs: 12, md: 14 }}
      >
        Copyright @2023 All rights reserved <br /> This website is made by Noah
        @ noaligpitan26@gmail.com
      </Typography>
    </Box>
  );
};

export default Footer;
