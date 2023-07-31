import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const AgentSelection = ({ selectedAgent, setSelectedAgent }) => {
  const [agentsList, setAgentsList] = useState([]);
  const colRef = collection(db, "agents");

  const changeAgentHandler = () => {
    console.log("changing active referal");
    setDoc(doc(db, "activeReferral", "w621XQGQGnFN3k6DjqQM"), {
      name: selectedAgent,
    })
      .then(() => {
        toast.success("Active agent changed.", {
          containerId: "admin-notifications",
        });
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    console.log("fetching agents to put in selection");
    onSnapshot(colRef, (snapshot) => {
      setAgentsList([]);
      snapshot.docs.map((doc) => {
        setAgentsList((prev) => [...prev, { data: doc.data(), id: doc.id }]);
      });
    });
  }, []);
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Agents</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          value={selectedAgent}
          onChange={(e) => setSelectedAgent(e.target.value)}
        >
          {/* <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem> */}
          {agentsList?.map((agent) => {
            return (
              <MenuItem key={agent.id} value={agent.data.name}>
                {agent.data.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Button
        sx={{ mx: 2 }}
        variant="contained"
        color="success"
        onClick={changeAgentHandler}
      >
        Change
      </Button>
    </Stack>
  );
};

export default AgentSelection;
