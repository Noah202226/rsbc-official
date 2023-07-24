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
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import BannerImg from "../../public/young-couple-holding.jpg";

const WelcomeBanner = ({ selectedAgent }) => {
  const [monthlyPay, setMonthlyPay] = useState();
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
          className="card"
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
            {BannerImg ? (
              <Image
                className="bannerImage"
                // src={"/handsome-man.jpg"}
                src={BannerImg}
                // src={"/online-microcredit-loans.jpg"}
                // src={"/crop.jpg"}
                alt="joyful-woman"
                width={200}
                height={200}
              />
            ) : (
              <Skeleton variant="rectangular" width={200} height={200} />
            )}
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
          className="card"
        >
          <Stack
            flexDirection={"column"}
            alignItems={{ xs: "flex-start", md: "flex-end" }}
            justifyContent={"flex-end"}
            className="bounceContainer "
          >
            <Typography
              variant="h3"
              my={{ xs: 2, md: 0 }}
              textAlign={{ xs: "center", md: "center" }}
              sx={{ textDecoration: "underline" }}
              fontSize={{ xs: 16, md: 30 }}
            >
              RSBC Bulacan Primes Marketing Consulting
            </Typography>
          </Stack>

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
                Loan Calculator
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
                  placeholder="Your email (optional)"
                  // required
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
                    <MenuItem value={"2,000,000"}>2,000,000</MenuItem>
                    <MenuItem value={"1,000,000"}>1,000,000</MenuItem>
                    <MenuItem value={"500,000"}>500,000</MenuItem>
                    <MenuItem value={"200,000"}>200,000</MenuItem>
                    <MenuItem value={"100,000"}>100,000</MenuItem>
                    <MenuItem value={"50,000"}>50,000</MenuItem>
                    <MenuItem value={"20,000"}>20,000</MenuItem>
                  </Select>
                </FormControl>

                <FormControl
                  fullWidth
                  sx={{ ml: { xs: 0, md: 1 }, mb: { xs: 1, md: 0 } }}
                  required
                >
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="status"
                  >
                    <MenuItem value={0.0149}>Self-employed (1.49%)</MenuItem>
                    <MenuItem value={0.0149}>Employed (1.49%) </MenuItem>
                    <MenuItem value={0.0139}>Doctors (1.39%)</MenuItem>
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
                helperText="Monthly Pay"
                value={monthlyPay}
                sx={{ mb: 1 }}
              />

              <TextField
                type="hidden"
                name="user_referral"
                // disabled
                value={selectedAgent}
                required
              />

              <Button
                // type="submit"
                onClick={() => {
                  console.log("Computing...");
                  const selectedStatus = form.current.status.value;
                  const selectedLoanDuration = form.current.loan_duration.value;
                  const selectedDesiredAmount =
                    form.current.desired_amount.value;
                  console.log(
                    selectedDesiredAmount,
                    selectedLoanDuration,
                    selectedStatus
                  );
                  console.log(Number(selectedDesiredAmount.replace(/,/g, "")));

                  const answer1 =
                    Number(selectedDesiredAmount.replace(/,/g, "")) *
                    parseFloat(selectedStatus);
                  const answer2 =
                    Number(selectedDesiredAmount.replace(/,/g, "")) /
                    parseFloat(selectedLoanDuration);

                  const perMonth = answer1 + answer2;

                  setMonthlyPay(perMonth.toFixed(6));
                }}
                variant="contained"
                color="success"
                sx={{
                  // background: "rgb(240,63,70)",
                  background:
                    "linear-gradient(-90deg, rgba(0,100,0,1) 100%, rgba(5,200,1) 100%)",
                  "&:hover": {
                    background:
                      "linear-gradient(-90deg, rgba(0,150,0,1) 100%, rgba(5,200,1) 100%)", // Replace with your desired gradient on hover
                  },
                  transition: "all 5s ease-in",
                }}
              >
                COMPUTE
              </Button>

              {/* <Typography
                className="bouncingElement"
                variant="h4"
                // fontFamily={"serif"}
                textTransform={"uppercase"}
                textAlign={"center"}
                color={"white"}
                sx={{
                  background: "red",
                  padding: ".5rem",
                  borderRadius: "1rem",
                  width: "100%",
                  border: "3px solid black",
                }}
              >
                APPLY NOW
              </Typography> */}

              <Button
                className="bouncingElement"
                type="submit"
                onClick={() => console.log("computing...")}
                variant="contained"
                color="success"
                sx={{
                  // background: "rgb(240,63,70)",
                  background:
                    "linear-gradient(0deg, rgba(255,63,70,1) -50%, rgba(255,0,0,1) 100%)",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, rgba(212,6,14,1) 0%, rgba(255,0,0,1) 100%)", // Replace with your desired gradient on hover
                  },
                  padding: ".5rem",
                  fontSize: "2rem",
                  my: 2,
                }}
              >
                APPLY NOW
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomeBanner;
