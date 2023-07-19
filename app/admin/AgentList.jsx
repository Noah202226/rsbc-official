"use client";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { Card, Paper, Typography } from "@mui/material";

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
      {agentsList?.map((agent) => (
        <Card key={agent.id}>
          <Typography>{`Agent Name: ${agent?.data.name}`}</Typography>
        </Card>
      ))}
    </Paper>
  );
};

export default AgentList;
