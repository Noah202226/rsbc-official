import { Button } from "@mui/material";
import React from "react";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebase";

const DeleteAgent = ({ agentId }) => {
  const deleteHandler = () => {
    console.log(agentId);
    deleteDoc(doc(db, "agents", agentId))
      .then(() => console.log("agent deleted."))
      .catch((e) => console.log(e));
  };
  return (
    <Button variant="contained" color="error" onClick={deleteHandler}>
      Delete
    </Button>
  );
};

export default DeleteAgent;
