"use client";

import {
  Box,
  Button,
  Card,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AgentList from "./AgentList";
import AddAgent from "./AddAgent";
import { useRef, useState } from "react";
import SelectedAgent from "./SelectedAgent";
import AgentSelection from "./AgentSelection";

const page = () => {
  const newAgentFormRef = useRef();
  const [agentName, setAgentName] = useState("");
  const [agentCode, setAgentCode] = useState("");

  const [selectedAgent, setSelectedAgent] = useState("");
  return (
    <Box sx={{ display: "grid", placeItems: "center" }}>
      <Box width={"100%"}>
        <Typography variant="h2" textAlign={"center"}>
          Admin
        </Typography>

        <Grid container>
          <Grid item xs={12} md={6}>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="h5">Settings</Typography>
              <SelectedAgent />
            </Stack>

            <Typography variant="body">
              Select agent to change your gonna get client visitor this day
            </Typography>

            <AgentSelection
              selectedAgent={selectedAgent}
              setSelectedAgent={setSelectedAgent}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box padding={1}>
              <Stack
                flexDirection={"row"}
                alignContent={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="h6">Agent list</Typography>

                <AddAgent
                  newAgentFormRef={newAgentFormRef}
                  agentName={agentName}
                  setAgentName={setAgentName}
                  agentCode={agentCode}
                  setAgentCode={setAgentCode}
                />
                <Button onClick={() => newAgentFormRef.current.showModal()}>
                  New Agent
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
