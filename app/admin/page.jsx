import { Box, Card, Paper, Typography } from "@mui/material";
import AgentList from "./AgentList";

const page = () => {
  return (
    <Box>
      <Typography variant="h2">Admin</Typography>

      <Box>
        <Paper>
          <AgentList />
        </Paper>
      </Box>
    </Box>
  );
};

export default page;
