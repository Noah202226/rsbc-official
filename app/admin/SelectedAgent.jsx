"use client";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { Typography } from "@mui/material";

const SelectedAgent = () => {
  const [selectedAgent, setSelectedAgent] = useState();

  const colRef = collection(db, "activeReferral");
  useEffect(() => {
    console.log("fetching agents");
    onSnapshot(colRef, (snapshot) => {
      snapshot.docs.map((doc) => {
        setSelectedAgent(doc.data().name);
      });
    });
  }, []);
  return (
    <div style={{ padding: 2 }}>
      Selected agent for this day:{" "}
      <Typography variant="h6" textAlign={"center"}>
        {selectedAgent ? selectedAgent : "No selected agent"}
      </Typography>
    </div>
  );
};

export default SelectedAgent;
