import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import LoginFormButton from "./LoginFormButton";
import { ToastContainer, toast } from "react-toastify";

const Login = ({ setIsLogged }) => {
  const loginFormRef = useRef();
  return (
    <Paper
      elevation={3}
      sx={{
        // height: 300,
        // width: 500,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
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
        <Typography variant="h4" textAlign={"center"}>
          Login
        </Typography>
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
