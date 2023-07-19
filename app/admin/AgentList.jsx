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
    <Paper>
      {agentsList.length > 0 ? (
        agentsList?.map((agent) => (
          <Card key={agent.id} sx={{ p: 1, mt: 1 }}>
            <Stack>
              <Typography>{`Agent Name: ${agent?.data.name}`}</Typography>
            </Stack>

            <Stack>
              <Button color="success" onClick={() => console.log(agent.id)}>
                <Update />
              </Button>

              <DeleteAgent agentId={agent.id} />
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
