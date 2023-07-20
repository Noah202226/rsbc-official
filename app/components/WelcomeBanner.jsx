"use client";
import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

const WelcomeBanner = ({ selectedAgent }) => {
  const form = useRef();

  const sendData = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert("Email sent.");
        },
        (error) => {
          console.log(error.text);
          alert("Email not sent.", error.text);
        }
      );
  };

  return (
    <Box
      className="withBg"
      sx={{
        backgroundImage: "url('/atm-banner.jpg')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "-100px 10px",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6} sx={{ height: "90vh" }}>
          <Stack
            alignItems={"start"}
            justifyContent={"space-around"}
            height={"100%"}
            padding={2}
          >
            <Stack mt={2}>
              <Typography
                mt={2}
                variant="h2"
                color={"#004B4B"}
                // textAlign={"center"}
                fontFamily={"serif"}
                // sx={{ textShadow: "2px 0 3px indigo" }}
                fontSize={{ xs: 40, md: 60 }}
              >
                Loan for your
              </Typography>

              <Box className="words-wrapper">
                <div className="words">
                  <span className="word">Business needs</span>
                  <span className="word">Personal loan</span>
                  <span className="word">Improving House</span>
                  <span className="word">Cash flow</span>
                  <span className="word">Business expansion</span>
                </div>
              </Box>
            </Stack>

            <Stack
              flexDirection={"column"}
              alignItems={"flex-end"}
              justifyContent={"flex-end"}
            >
              <Typography variant="h5" textAlign={"end"} color={"#ef4b4b"}>
                Get cash in a flash!
              </Typography>

              <Typography
                variant="h4"
                textAlign={{ xs: "center", md: "start" }}
                sx={{ textDecoration: "underline" }}
                fontSize={{ xs: 21, md: 40 }}
              >
                RSBC Bulacan <br /> Primes Marketing <br /> Consulting
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Image
            alt="rsbcLogo"
            className="rsbcLogo"
            src={"/rsbc.jpg"}
            width={150}
            height={150}
            style={{ position: "absolute", top: 60, right: 20 }}
          />
          <Card
            elevation={3}
            sx={{
              zIndex: 999,
              padding: 1,
              background: "rgba(240,241,243,.8)",
              color: "black",
              textShadow: ".5px 0px 1px black",
            }}
          >
            <Typography
              variant="body"
              textAlign={"center"}
              justifyContent={"center"}
              justifySelf={"center"}
            >
              We offer Bank Cash Loan with No Collateral and No Co-maker for as
              low as 1.39% up to 1.99% per month.
            </Typography>
            <br />
            <Typography variant="body">
              Loanable amount from 20K up to 2M- Loan Term from 12 mos,18
              mos,24mos up to 36mos to pay.
            </Typography>
          </Card>
          <Paper sx={{ padding: 1, width: 500, opacity: 0.9 }} elevation={5}>
            <form
              ref={form}
              onSubmit={sendData}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Typography mb={1} variant="body" textAlign={"start"}>
                Fill out the form.
              </Typography>
              <Stack flexDirection={"row"}>
                <TextField
                  sx={{ mb: 1 }}
                  fullWidth
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  required
                />
                <TextField
                  sx={{ ml: 1 }}
                  fullWidth
                  type="email"
                  name="user_email"
                  placeholder="Your email"
                  required
                />
              </Stack>

              <Stack flexDirection={"row"}>
                <FormControl fullWidth sx={{ mb: 1 }} required>
                  <InputLabel id="demo-simple-select-label">
                    Desire amount
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="desired_amount"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={{ ml: 1 }} required>
                  <InputLabel id="demo-simple-select-label">
                    Loan duration
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="loan_duration"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <TextField
                type="text"
                name="message"
                placeholder="Some message"
                multiline
                sx={{ mb: 1 }}
              />

              <TextField
                type="hidden"
                name="user_referral"
                disabled
                value={selectedAgent}
                required
              />

              <Button type="submit" variant="contained" color="success">
                Get Cash.
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomeBanner;
