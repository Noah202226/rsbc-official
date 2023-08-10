"use client";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { Button, Card, Paper, Stack, Typography } from "@mui/material";
import { Delete, Update } from "@mui/icons-material";
import DeleteAgent from "./DeleteAgent";

const AgentList = () => {
  const [agentsList, setAgentsList] = useState([]);
  const colRef = collection(db, "agents");
  useEffect(() => {
    console.log("fetching agents");
    onSnapshot(colRef, (snapshot) => {
      setAgentsList([]);
      snapshot.docs.map((doc) => {
        setAgentsList((prev) => [...prev, { data: doc.data(), id: doc.id }]);
      });
    });
  }, []);
  return (
    <Paper
      elevation={5}
      sx={{
        height: 720,
        overflowY: "auto",
        padding: 1,
        "&::hover": { cursor: "all-scroll" },
        "&::-webkit-scrollbar": { width: "5px" },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "red",
          borderRadius: "5px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "green",
          borderRadius: "1px",
          cursor: "grabbing",
        },
      }}
    >
      {agentsList.length > 0 ? (
        agentsList?.map((agent) => (
          <Card key={agent.id} sx={{ p: 1, mt: 1 }}>
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack>
                <Typography>{`Agent Name: ${agent?.data.name}`}</Typography>
                <Typography>{`Email address: ${agent?.data.email}`}</Typography>
                <Typography>{`Referral Link: https://rsbc-official.vercel.app/?ref=${agent?.data.name}`}</Typography>
              </Stack>

              <Stack flexDirection={"row"}>
                {/* <Button color="success" onClick={() => console.log(agent.id)}>
                  <Update />
                </Button> */}

                <DeleteAgent agentId={agent.id} />
              </Stack>
            </Stack>
          </Card>
        ))
      ) : (
        <Typography variant="h6">Fetching agents ....</Typography>
      )}
    </Paper>
  );
};

export default AgentList;
