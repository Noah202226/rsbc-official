import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Youtube from "@mui/icons-material/YouTube";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ background: "#004B4B", color: "white", padding: 2 }}>
      <Grid container>
        <Grid item xs={12} md={4} mt={{ xs: 2, md: 0 }}>
          <Typography variant="h4">RSBC</Typography>

          <Stack>
            <Typography variant="body" fontSize={{ xs: 12, md: 21 }}>
              rsbc.official@gmail.com
            </Typography>

            <Typography variant="body" fontSize={{ xs: 12, md: 21 }}>
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
              >
                <Facebook />
                <Typography variant="body" ml={1} fontSize={{ xs: 12, md: 18 }}>
                  RSBC Bulacan Primes Marketing Consulting
                </Typography>
              </Stack>
            </Link>

            <Link
              href={"https://www.facebook.com/profile.php?id=100092522162147"}
              target="_blank"
            >
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"start"}
              >
                <YouTube />
                <Typography variant="body" ml={1} fontSize={{ xs: 12, md: 18 }}>
                  RSBC Primes Marketing Consulting
                </Typography>
              </Stack>
            </Link>

            <Link
              href={"https://www.facebook.com/profile.php?id=100092522162147"}
              target="_blank"
            >
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"start"}
              >
                <Instagram />
                <Typography variant="body" ml={1} fontSize={{ xs: 12, md: 18 }}>
                  @ RSBC Bulacan Primes
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Grid>

        <Grid item xs={12} md={4} mt={{ xs: 2, md: 0 }}>
          <Stack>
            <Typography variant="h6" fontSize={{ xs: 12, md: 18 }}>
              Open Hours We work all days a week,
            </Typography>
            <Typography variant="h6" fontSize={{ xs: 12, md: 18 }}>
              Please contact us for any inquiry.
            </Typography>

            <Typography fontSize={{ xs: 12, md: 18 }}>
              Monday - Friday: 11:00 am - 8:00 pm
            </Typography>

            <Typography fontSize={{ xs: 12, md: 18 }}>
              Saturday: 10:00 am - 6:00 pm
            </Typography>

            <Typography fontSize={{ xs: 12, md: 18 }}>
              Sunday: 11:00 am - 6:00 pm
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Typography variant="body2" textAlign={"center"} mt={2}>
        Copyright @2023 All rights reserved | This website is made by Noah -
        Contact me @ noaligpitan26@gmail.com
      </Typography>
    </Box>
  );
};

export default Footer;
