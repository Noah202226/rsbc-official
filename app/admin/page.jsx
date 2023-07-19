import {
  Box,
  Button,
  Card,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AgentList from "./AgentList";

const page = () => {
  return (
    <Box sx={{ display: "grid", placeItems: "center" }}>
      <Box width={"100%"}>
        <Typography variant="h2" textAlign={"center"}>
          Admin
        </Typography>

        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">Settings</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box bgcolor={"red"} padding={1}>
              <Stack
                flexDirection={"row"}
                alignContent={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="h6">Agent list</Typography>
                <Button variant="contained" color="warning">
                  Add new agent
                </Button>
              </Stack>
              <AgentList />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default page;
