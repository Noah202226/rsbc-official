import { Button, Stack, TextField, Typography } from "@mui/material";
import { addDoc, collection, doc } from "firebase/firestore";
import React from "react";
import { db } from "../utils/firebase";
import { toast } from "react-toastify";

const AddAgent = ({
  newAgentFormRef,
  agentName,
  setAgentName,
  agentEmail,
  setAgentEmail,
  setAgentCode,
}) => {
  const addAgentHandler = () => {
    console.log("adding agent...");
    addDoc(collection(db, "agents"), { name: agentName, email: agentEmail })
      .then(() => {
        newAgentFormRef.current.close();
        // alert("New agent added.");
        toast.success("Agent successfully saved.", {
          containerId: "admin-notifications",
        });

        setAgentName("");
        setAgentEmail("");
      })
      .catch((e) => alert(e));
  };
  return (
    <dialog ref={newAgentFormRef}>
      <Typography variant="h4">New Agent</Typography>

      <Stack>
        <TextField
          placeholder="Agent Name"
          value={agentName}
          onChange={(e) => setAgentName(e.target.value)}
        />
        <TextField
          placeholder="Email"
          value={agentEmail}
          onChange={(e) => setAgentEmail(e.target.value)}
        />

        <Button variant="contained" color="warning" onClick={addAgentHandler}>
          Save
        </Button>
      </Stack>
    </dialog>
  );
};

export default AddAgent;
