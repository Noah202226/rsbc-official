"use client";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import React, { useState } from "react";

const WelcomeBanner = () => {
  const router = useRouter();
  const [desiredAmount, setDesiredAmount] = useState();
  const [loanDuration, setLoanDuration] = useState();
  const [clientEmail, setClientEmail] = useState();

  const sendEmail = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ clientEmail, desiredAmount, loanDuration }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Navigate to thank you
    router.push(`/emailsend`);

    return NextResponse.json(res.json());
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
            alignItems: "center",
            justifyContent: "center",
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
          <Paper sx={{ padding: 2, width: 500, opacity: 0.9 }} elevation={5}>
            <form>
              <Typography
                fontFamily={"serif"}
                textAlign={"center"}
                variant="h5"
              >
                How much do you want?
              </Typography>
              <Typography
                fontFamily={"serif"}
                variant="h6"
                textAlign={"center"}
              >
                We provide online instant cash loans with quick
              </Typography>

              <FormControl sx={{ width: "100%", mt: 2 }}>
                <Select
                  value={desiredAmount}
                  onChange={(e) => setDesiredAmount(e.target.value)}
                  displayEmpty
                  native
                  defaultValue={30}
                >
                  <option value={""}>Select amount</option>
                  <option value={"2M"}>2,000,000</option>
                  <option value={"1M"}>1,000,000</option>
                  <option value={"500k"}>500,000</option>
                </Select>
                {/* <FormHelperText sx={{ textAlign: "center" }}>
                    Derised amount
                  </FormHelperText> */}
              </FormControl>

              <FormControl sx={{ width: "100%", mt: 2 }}>
                <Select
                  value={loanDuration}
                  onChange={(e) => setLoanDuration(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  native
                >
                  <option value={""}>Select duration</option>
                  <option value={6}>6 months</option>
                  <option value={12}>1 year</option>
                  <option value={18}>1 year and 6 months</option>
                  <option value={24}>2 years</option>
                  <option value={36}>3 years</option>
                </Select>
              </FormControl>

              <TextField
                type="email"
                fullWidth
                label="Email"
                sx={{ mt: 2 }}
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
              />

              <Stack>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 2, alignSelf: "flex-end", alignItems: "flex-end" }}
                  onClick={sendEmail}
                >
                  Send a qoute.
                </Button>
              </Stack>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomeBanner;
