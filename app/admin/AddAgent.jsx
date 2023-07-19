import { Button, TextField, Typography } from "@mui/material";
import { addDoc, collection, doc } from "firebase/firestore";
import React from "react";
import { db } from "../utils/firebase";

const AddAgent = ({
  newAgentFormRef,
  agentName,
  setAgentName,
  agentCode,
  setAgentCode,
}) => {
  const addAgentHandler = () => {
    console.log("adding agent...");
    addDoc(collection(db, "agents"), { name: agentName, code: agentCode })
      .then(() => {
        newAgentFormRef.current.close();
        alert("New agent added.");

        setAgentName("");
        setAgentCode("");
      })
      .catch((e) => alert(e));
  };
  return (
    <dialog ref={newAgentFormRef}>
      <Typography>New Agent</Typography>
      <TextField
        placeholder="Agent Name"
        value={agentName}
        onChange={(e) => setAgentName(e.target.value)}
      />
      <TextField
        placeholder="Agent Code"
        value={agentCode}
        onChange={(e) => setAgentCode(e.target.value)}
      />

      <Button variant="contained" color="warning" onClick={addAgentHandler}>
        Save
      </Button>
    </dialog>
  );
};

export default AddAgent;
