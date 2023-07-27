import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import LoginFormButton from "./LoginFormButton";

const Login = ({ setIsLogged }) => {
  const loginFormRef = useRef();
  return (
    <Box
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ marginTop: 20 }}
    >
      <Paper
        elevation={3}
        sx={{
          height: 300,
          width: 500,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <form ref={loginFormRef}>
          <Typography variant="h4">Login</Typography>
          <TextField type="text" placeholder="User" name="user" />
          <TextField type="text" placeholder="Pass" name="password" />

          <LoginFormButton formRef={loginFormRef} setIsLogged={setIsLogged} />
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
