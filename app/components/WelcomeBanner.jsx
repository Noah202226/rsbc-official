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
      // sx={{
      //   backgroundImage: "url('/atm-banner.jpg')",
      //   backgroundSize: "contain",
      //   backgroundRepeat: "no-repeat",
      //   // backgroundPosition: "-100px 10px",
      // }}
    >
      <Grid container>
        <Grid
          item
          container
          xs={12}
          md={6}
          sx={{ height: { xs: "100%", md: "90vh" } }}
        >
          <Grid
            item
            md={12}
            order={{ xs: 2, md: 1 }}
            height={{ xs: "5%", md: "35%" }}
          >
            <Stack
              alignItems={"center"}
              justifyContent={"space-evenly"}
              height={{ xs: "20%", md: "100%" }}
              padding={2}
            >
              <Stack mt={{ xs: 1, md: 10 }}>
                <Typography
                  variant="h2"
                  color={{ md: "black", xs: "#004B4B" }}
                  textAlign={"start"}
                  fontFamily={"serif"}
                  // sx={{ textShadow: "2px 0 3px indigo" }}
                  fontSize={{ xs: 40, md: 55 }}
                >
                  Loan for your
                </Typography>

                <Box className="words-wrapper">
                  <div className="words">
                    <span className="word">Business Investment</span>
                    <span className="word">Personal Investment</span>
                    <span className="word">House Construction</span>
                    <span className="word">Refinancing</span>
                    <span className="word">Working Capital</span>
                  </div>
                </Box>
              </Stack>
            </Stack>
          </Grid>

          <Grid item md={12} order={{ xs: 1, md: 2 }}>
            <Image
              className="bannerImage"
              // src={"/handsome-man.jpg"}
              src={"/young-couple-holding.jpg"}
              // src={"/online-microcredit-loans.jpg"}
              // src={"/crop.jpg"}
              alt="joyful-woman"
              width={200}
              height={200}
            />
          </Grid>
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
          <Stack
            flexDirection={"column"}
            alignItems={{ xs: "flex-start", md: "flex-end" }}
            justifyContent={"flex-end"}
            mt={{ xs: 2, md: 0 }}
            className="bounceContainer"
          >
            <Typography
              className="bouncingElement"
              variant="body2"
              // fontFamily={"serif"}
              textTransform={"uppercase"}
              textAlign={"flex-end"}
              color={"white"}
              sx={{ background: "red", padding: ".5rem", borderRadius: "1rem" }}
            >
              Get cash in a flash!
            </Typography>

            <Typography
              variant="h4"
              mt={{ xs: 2, md: 0 }}
              textAlign={{ xs: "center", md: "end" }}
              sx={{ textDecoration: "underline" }}
              fontSize={{ xs: 16, md: 28 }}
            >
              RSBC Bulacan Primes Marketing Consulting
            </Typography>
          </Stack>

          <Card
            elevation={3}
            sx={{
              zIndex: 999,
              padding: 2,
              marginY: { xs: 2, md: 0 },
              // background: "#ef4b4b",
              background: "red",
              color: "white",
              // textShadow: ".5px 1px 1px black",
            }}
          >
            <Typography
              variant="body"
              textAlign={"center"}
              justifyContent={"center"}
              justifySelf={"center"}
              fontFamily={"serif"}
            >
              - We offer Bank Cash Loan with No Collateral and No Co-maker for
              as low as 1.39% up to 1.99% per month.
            </Typography>
            <br />
            <Typography variant="body" fontFamily={"serif"}>
              - Loanable amount from 20K up to 2M- Loan Term from 12 mos,18
              mos,24mos up to 36mos to pay.
            </Typography>
          </Card>

          <Paper sx={{ padding: 1, width: "100%", opacity: 0.9 }} elevation={5}>
            <form
              ref={form}
              onSubmit={sendData}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography mb={1} variant="body" textAlign={"start"}>
                Fill out the form.
              </Typography>
              <Stack flexDirection={{ xs: "column", md: "row" }}>
                <TextField
                  sx={{ mb: 1 }}
                  fullWidth
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  required
                />
                <TextField
                  sx={{ ml: { xs: 0, md: 1 }, mb: { xs: 1, md: 0 } }}
                  fullWidth
                  type="email"
                  name="user_email"
                  placeholder="Your email"
                  required
                />
              </Stack>

              <Stack flexDirection={{ xs: "column", md: "row" }}>
                <FormControl fullWidth sx={{ mb: 1 }} required>
                  <InputLabel id="demo-simple-select-label">
                    Desire amount
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="desired_amount"
                  >
                    <MenuItem value={"100,000"}>100,000</MenuItem>
                    <MenuItem value={"200,000"}>200,000</MenuItem>
                    <MenuItem value={"500,000"}>500,000</MenuItem>
                    <MenuItem value={"1,000,000"}>1,000,000</MenuItem>
                    <MenuItem value={"2,000,000"}>2,000,000</MenuItem>
                  </Select>
                </FormControl>

                <FormControl
                  fullWidth
                  sx={{ ml: { xs: 0, md: 1 }, mb: { xs: 1, md: 0 } }}
                  required
                >
                  <InputLabel id="demo-simple-select-label">
                    Loan duration
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="loan_duration"
                  >
                    <MenuItem value={6}>6 Months</MenuItem>
                    <MenuItem value={12}>12 Months</MenuItem>
                    <MenuItem value={24}>24 Months</MenuItem>
                    <MenuItem value={36}>36 Months</MenuItem>
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
                // type="hidden"
                name="user_referral"
                // disabled
                value={selectedAgent}
                required
              />

              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{
                  // background: "rgb(240,63,70)",
                  background:
                    "linear-gradient(90deg, rgba(240,63,70,1) 40%, rgba(255,0,0,1) 100%)",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, rgba(212,6,14,1) 0%, rgba(255,0,0,1) 100%)", // Replace with your desired gradient on hover
                  },
                }}
              >
                Get Cash Now
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomeBanner;
