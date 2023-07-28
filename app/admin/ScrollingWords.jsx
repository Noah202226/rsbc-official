import { Box, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const ScrollingWords = () => {
  const [settings, setSettings] = useState([]);
  const colRef = collection(db, "settings");
  useEffect(() => {
    console.log("fetching agents");
    onSnapshot(colRef, (snapshot) => {
      setSettings([]);
      snapshot.docs.map((doc) => {
        setSettings((prev) => [...prev, { data: doc.data(), id: doc.id }]);
      });
    });
  }, []);
  return (
    <Box>
      <Typography variant="h6">Scrolling words</Typography>

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
