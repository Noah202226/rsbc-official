import { Button } from "@mui/material";
import React from "react";

const DeleteAgent = ({ agentId }) => {
  const deleteHandler = () => {
    console.log(agentId);
  };
  return (
    <Button variant="contained" color="error" onClick={deleteHandler}>
      Delete
    </Button>
  );
};

export default DeleteAgent;
