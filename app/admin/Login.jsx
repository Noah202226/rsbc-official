import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import LoginFormButton from "./LoginFormButton";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";

const Login = ({ setIsLogged }) => {
  const loginFormRef = useRef();
  return (
    <Paper
      elevation={3}
      sx={{
        height: 300,
        width: 500,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        mt: 10,
      }}
    >
      <form
        ref={loginFormRef}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          height: "100%",
          padding: 10,
        }}
      >
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
          mx={10}
        >
          <Typography
            variant="h5"
            textAlign={"end"}
            justifyContent={"flex-end"}
            sx={{ mt: 5 }}
          >
            RSBC ADMIN SECTION
          </Typography>

          <Tooltip title="Back to homepage">
            <Link href={"/"}>
              <Image
                src={"/rsbc.jpg"}
                alt="security-bank-logo"
                width={60}
                height={60}
              />
            </Link>
          </Tooltip>
        </Stack>
        <TextField type="text" placeholder="User" name="user" fullWidth />
        <TextField
          type="password"
          placeholder="Pass"
          name="password"
          fullWidth
        />

        <LoginFormButton formRef={loginFormRef} setIsLogged={setIsLogged} />
      </form>
    </Paper>
  );
};

export default Login;
