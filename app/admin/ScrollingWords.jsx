import { Box, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const ScrollingWords = () => {
  return (
    <Box>
      <Stack>
        <TextField helperText="Word 1" />
        <TextField helperText="Word 2" />
        <TextField helperText="Word 3" />
        <TextField helperText="Word 4" />
        <TextField helperText="Word 5" />
      </Stack>
    </Box>
  );
};

export default ScrollingWords;
