"use client";

import { Box, Button, Grid, Stack, Tooltip, Typography } from "@mui/material";
import AgentList from "./AgentList";
import AddAgent from "./AddAgent";
import { useRef, useState } from "react";
import SelectedAgent from "./SelectedAgent";
import AgentSelection from "./AgentSelection";
import Login from "./Login";
import { Flip, Slide, ToastContainer, Zoom, toast } from "react-toastify";
import Settings from "./Settings";
import Link from "next/link";
import Image from "next/image";
import ScrollingWords from "./ScrollingWords";

const page = () => {
  const [isLogged, setIsLogged] = useState(false);
  const newAgentFormRef = useRef();
  const [agentName, setAgentName] = useState("");
  const [agentCode, setAgentCode] = useState("");
  const [agentEmail, setAgentEmail] = useState("");

  const [selectedAgent, setSelectedAgent] = useState("");
  const [selectedAgentEmail, setSelectedAgentEmail] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isLogged ? (
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            width: "100%",
            padding: ".5rem",
          }}
        >
          <Box width={"100%"}>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              mx={10}
            >
              <Typography
                variant="h5"
                textAlign={"end"}
                justifyContent={"flex-end"}
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

            <Grid container spacing={2} width={"100%"}>
              <Grid item xs={12} md={6}>
                <Stack sx={{ background: "cyan", p: 1, borderRadius: 2 }}>
                  <Stack
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography variant="h5">
                      Agent Referal Monitoring
                    </Typography>
                    <SelectedAgent />
                  </Stack>

                  <Typography variant="body">
                    Select agent to change your gonna get client visitor this
                    day
                  </Typography>

                  <AgentSelection
                    selectedAgent={selectedAgent}
                    setSelectedAgent={setSelectedAgent}
                    selectedAgentEmail={selectedAgentEmail}
                    setSelectedAgentEmail={setSelectedAgentEmail}
                  />
                </Stack>
                <Box padding={1}>
                  <Stack
                    flexDirection={"row"}
                    alignContent={"center"}
                    justifyContent={"space-between"}
                    my={1}
                  >
                    <Typography variant="h6">Agent list</Typography>

                    <AddAgent
                      newAgentFormRef={newAgentFormRef}
                      agentName={agentName}
                      setAgentName={setAgentName}
                      agentCode={agentCode}
                      setAgentCode={setAgentCode}
                      agentEmail={agentEmail}
                      setAgentEmail={setAgentEmail}
                    />
                    <Button
                      variant="contained"
                      onClick={() => newAgentFormRef.current.showModal()}
                      size="small"
                    >
                      New Agent
                    </Button>
                  </Stack>
                  <AgentList />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h5">Website Settings</Typography>

                <Settings />
              </Grid>
            </Grid>
          </Box>
        </Box>
      ) : (
        <Login setIsLogged={setIsLogged} />
      )}
      <ToastContainer
        enableMultiContainer
        containerId={"admin-notifications"}
        position={toast.POSITION.TOP_CENTER}
        pauseOnHover={false}
        // transition={Flip}
        autoClose={2000}
      />
    </Box>
  );
};

export default page;
