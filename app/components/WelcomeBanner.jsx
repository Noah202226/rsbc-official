"use client";
import {
  Box,
  Button,
  Card,
  Chip,
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
import { toast } from "react-toastify";
import Autocomplete from "./Autocomplete";

const WelcomeBanner = ({ selectedAgent, selectedAgentEmail, words }) => {
  const form = useRef();

  const [isSubmiting, setIsSubmiting] = useState(false);

  const [monthlyPay, setMonthlyPay] = useState();
  const [desiredAmount, setDesiredAmount] = useState("");
  const [status, setStatus] = useState("");
  const [loanDuration, setLoanDuration] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");

  const sendData = async (e) => {
    e.preventDefault();

    setIsSubmiting(true);

    // emailjs
    //   .sendForm(
    //     process.env.NEXT_PUBLIC_SERVICE_ID,
    //     process.env.NEXT_PUBLIC_TEMPLATE_ID,
    //     form.current,
    //     process.env.NEXT_PUBLIC_PUBLIC_KEY
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       form.current.reset();
    //       // alert("Email sent.");
    //       setDesiredAmount("");
    //       setStatus("");
    //       setLoanDuration();
    //       setMonthlyPay();
    //       toast.success(
    //         "Email sent. You will get response as soon as possible, Thanks!",
    //         { containerId: "home-notifications" }
    //       );
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       // alert("Email not sent.", error.text);
    //       toast.success(`Email failed to sent. ${error.text}`, {
    //         containerId: "home-notifications",
    //       });
    //     }
    //   );

    // Nodemailer
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          contact,
          location,
          desiredAmount,
          status,
          loanDuration,
          selectedAgent,
          selectedAgentEmail,
        }),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (data) {
        toast.success(
          "Email sent. You will get response as soon as possible, Thanks!",
          { containerId: "home-notifications" }
        );
        setDesiredAmount("");
        setStatus("");
        setLoanDuration("");
        setMonthlyPay("");
        setName("");
        setEmail("");
        setContact("");
        setLocation("");
        setIsSubmiting(false);
      }
    } catch (error) {
      toast.error("Email note sent. ", { containerId: "home-notifications" });
      console.error("Error sending email:", error);
    }
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
      <Grid id="header" container>
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
                    <span className="word">{words[2]?.data?.word1}</span>
                    <span className="word">{words[2]?.data?.word2}</span>
                    <span className="word">{words[2]?.data?.word3}</span>
                    <span className="word">{words[2]?.data?.word4}</span>
                    <span className="word">{words[2]?.data?.word5}</span>
                  </div>
                </Box>
              </Stack>
            </Stack>
          </Grid>

          <Grid item md={12} order={{ xs: 1, md: 2 }}>
            {words[1]?.data?.image1 ? (
              <Image
                className="bannerImage"
                // src={BannerImg}
                src={words[1]?.data?.image1}
                alt="joyful-woman"
                width={200}
                height={200}
              />
            ) : (
              <Skeleton
                className="welcomebanner-image"
                variant="rectangular"
                width={630}
                height={500}
              />
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
            flexDirection={"row"}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent={"flex-end"}
          >
            <Image
              className="rsbc-welcome-banner"
              src={"/rsbc.jpg"}
              alt="rsbc"
              width={100}
              height={100}
            />
            <Typography
              variant="h3"
              my={{ xs: 2, md: 0 }}
              textAlign={{ xs: "center", md: "center" }}
              // sx={{ textDecoration: "underline" }}
              fontSize={{ xs: 30, md: 36 }}
              fontWeight={"bolder"}
              color={"red"}
            >
              RSBC Bulacan Primes <br />{" "}
              <span style={{ color: "green" }}> Marketing Consulting</span>
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
              <Typography
                mb={1}
                variant="body"
                textAlign={{ xs: "start", md: "center" }}
                fontWeight="bolder"
                color={"green"}
              >
                Loan Calculator
              </Typography>
              <Stack flexDirection={{ xs: "column", md: "row" }}>
                <TextField
                  sx={{ mb: 1 }}
                  fullWidth
                  type="text"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
                <TextField
                  sx={{ ml: { xs: 0, md: 1 }, mb: { xs: 1, md: 0 } }}
                  fullWidth
                  type="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email (optional)"
                  // required
                />
              </Stack>

              <Stack flexDirection={{ xs: "column", md: "row" }}>
                <TextField
                  sx={{ mb: 1 }}
                  fullWidth
                  type="number"
                  name="user_name"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Contact #"
                  required
                />
                <TextField
                  sx={{ ml: { xs: 0, md: 1 }, mb: { xs: 1, md: 0 } }}
                  fullWidth
                  type="text"
                  name="user_name"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  required
                />
              </Stack>

              <Stack flexDirection={{ xs: "column", md: "row" }}>
                <FormControl fullWidth sx={{ mb: 1 }} required>
                  {/* <InputLabel id="demo-simple-select-label">
                    Desire amount
                  </InputLabel> */}
                  {/* <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="desired_amount"
                    value={desiredAmount}
                    onChange={(e) => setDesiredAmount(e.target.value)}
                  >
                    <MenuItem value={"2,000,000"}>2,000,000</MenuItem>
                    <MenuItem value={"1,000,000"}>1,000,000</MenuItem>
                    <MenuItem value={"500,000"}>500,000</MenuItem>
                    <MenuItem value={"200,000"}>200,000</MenuItem>
                    <MenuItem value={"100,000"}>100,000</MenuItem>
                    <MenuItem value={"50,000"}>50,000</MenuItem>
                    <MenuItem value={"20,000"}>20,000</MenuItem>
                  </Select> */}

                  {/* <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={["","2,000,000", "1,000,000","500,000","300,000","200,000","100,000","50,000","20,000" ]}
                    // sx={{ width: 300 }}
                    renderOption={(props, option) => {
                      return (
                        <li {...props} key={option}>
                          {option}
                        </li>
                      )
                    }}
                    renderTags={(tagValue, getTagProps) => {
                      return tagValue.map((option, index) => (
                        <Chip {...getTagProps({ index })} key={option} label={option} />
                      ))
                    }}
                    renderInput={(params) => (
                      <TextField key={...params.id} {...params}  label="Desired Amount" value={desiredAmount} onChange={e => setDesiredAmount(e.target.value)} />
                    )}
                    onChange={(e) => setDesiredAmount(e.target.innerHTML)}
                    value={desiredAmount}
                    
                  /> */}

                  <Autocomplete
                    inputValue={desiredAmount}
                    setInputValue={setDesiredAmount}
                  />
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
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <MenuItem value={"self-employed"}>
                      Employed, Self Employed, Banker (1.49% - 1.99%)
                    </MenuItem>

                    <MenuItem value={"doctors"}>Doctors (1.39%)</MenuItem>
                  </Select>
                </FormControl>

                <FormControl
                  fullWidth
                  sx={{ ml: { xs: 0, md: 1 }, mb: { xs: 1, md: 0 } }}
                  required
                >
                  <InputLabel id="demo-simple-select-label">
                    Loan term
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="loan_duration"
                    value={loanDuration}
                    onChange={(e) => setLoanDuration(e.target.value)}
                  >
                    <MenuItem value={12}>12 Months</MenuItem>
                    <MenuItem value={18}>18 Months</MenuItem>
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
                disabled
              />

              <Typography
                variant="caption"
                fontStyle={"italic"}
                color={"orangered"}
                textAlign={"right"}
                fontSize={11}
              >
                Note: For self-employed, employed, or bankers is not the exact
                amount. It's approximately a computation.
              </Typography>

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
                  let percentage;
                  const selectedLoanDuration = form.current.loan_duration.value;
                  const selectedDesiredAmount = desiredAmount;

                  if (selectedStatus == "self-employed") {
                    console.log("self-employed", 0.0149);
                    percentage = 0.0149;
                  } else if (selectedStatus == "employed") {
                    percentage = 0.0149;
                  } else if (selectedStatus == "doctors") {
                    percentage = 0.0139;
                  } else if (selectedStatus == "bankers") {
                    console.log("bankers", 0.0139);
                    percentage = 0.0139;
                  }

                  console.log(percentage);
                  console.log(Number(selectedDesiredAmount.replace(/,/g, "")));

                  const answer1 =
                    Number(selectedDesiredAmount.replace(/,/g, "")) *
                    percentage;
                  const answer2 =
                    Number(selectedDesiredAmount.replace(/,/g, "")) /
                    selectedLoanDuration;

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
                {isSubmiting ? "Sending ..." : "APPLY NOW"}
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomeBanner;
