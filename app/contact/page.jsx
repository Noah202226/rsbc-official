"use client";

import {
  Button,
  FormControl,
  Paper,
  Select,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
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

    const result = await res.json();

    console.log(result);

    // Navigate to thank you
    router.push(`/inquiry-send`);

    setClientEmail("");
    setDesiredAmount("");
    setLoanDuration("");
  };
  return (
    <Paper sx={{ padding: 2, width: 500, opacity: 0.9 }} elevation={5}>
      <form>
        <Typography fontFamily={"serif"} textAlign={"center"} variant="h5">
          How much do you want?
        </Typography>
        <Typography fontFamily={"serif"} variant="h6" textAlign={"center"}>
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
  );
};

export default page;
