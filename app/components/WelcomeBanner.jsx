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
import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

const WelcomeBanner = () => {
  const router = useRouter();

  const form = useRef();

  const sendData = async (e) => {
    e.preventDefault();

    // const data = {
    //   desiredAmount: form.current.children[2].children[0].children[0].value,
    //   loanDuration: form.current.children[3].children[0].children[0].value,
    //   clientEmail: form.current.children[4].children[1].children[0].value,
    // };
    // console.log(data);

    // await fetch("/api/contact", {
    //   method: "POST",
    //   body: JSON.stringify({ clientEmail, desiredAmount, loanDuration }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then(
    //     // Navigate to thank you
    //     router.push(`/emailsend`)
    //   )
    //   .catch((e) => console.log(e));

    emailjs
      .sendForm(
        "service_fm0ot7q",
        "template_krr6vzm",
        form.current,
        "4oaLvmxZtMd0y5oSI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
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
            <form ref={form} onSubmit={sendData}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomeBanner;
