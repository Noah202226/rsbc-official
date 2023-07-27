import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { db } from "../utils/firebase";
import { toast } from "react-toastify";

const Settings = () => {
  const [settings, setSettings] = useState([]);

  // Settings States
  const [footerTitle, setFooterTitle] = useState();
  const [footerEmail, setFooterEmail] = useState();
  const [footerContact, setFooterContact] = useState();
  const [footerAddress1, setFooterAddress1] = useState();
  const [footerAddress2, setFooterAddress2] = useState();

  const colRef = collection(db, "settings");

  const updateSettings = () => {
    const newSettings = {
      title: footerTitle,
      email: footerEmail,
      contact: footerContact,
      address1: footerAddress1,
      address2: footerAddress2,
    };
    console.log(newSettings);

    setDoc(doc(db, "settings", "footer"), newSettings)
      .then(() => {
        console.log("new settings saved");
        toast.success("Setting saved.", { containerId: "admin-notifications" });
      })
      .catch((e) => {
        console.log(e);
        toast.error("Failed to saved" + e, {
          containerId: "admin-notifications",
        });
      });
  };

  useEffect(() => {
    console.log("fetching settings");
    onSnapshot(colRef, (snapshot) => {
      setSettings([]);
      snapshot.docs.map((doc) => {
        setSettings((prev) => [...prev, { data: doc.data(), id: doc.id }]);
      });
    });
  }, []);

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false; // Set the ref to false to indicate subsequent renders
      return; // Skip the effect during the initial render
    }
    console.log("changed.");

    setFooterTitle(settings[0]?.data?.title);
    setFooterEmail(settings[0]?.data?.email);
    setFooterContact(settings[0]?.data?.contact);
    setFooterAddress1(settings[0]?.data?.address1);
    setFooterAddress2(settings[0]?.data?.address2);
  }, [settings]);

  return (
    <Box>
      <Stack>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          my={1}
        >
          <Typography variant="h6">Footer Details</Typography>

          <Button variant="contained" color="warning" onClick={updateSettings}>
            Update
          </Button>
        </Stack>

        <TextField
          helperText="Footer Title"
          value={footerTitle}
          onChange={(e) => setFooterTitle(e.target.value)}
        />
        <TextField
          helperText="Email"
          value={footerEmail}
          onChange={(e) => setFooterEmail(e.target.value)}
        />
        <TextField
          helperText="Contact no."
          value={footerContact}
          onChange={(e) => setFooterContact(e.target.value)}
        />
        <TextField
          helperText="Address 1"
          value={footerAddress1}
          onChange={(e) => setFooterAddress1(e.target.value)}
        />
        <TextField
          helperText="Address 2"
          value={footerAddress2}
          onChange={(e) => setFooterAddress2(e.target.value)}
        />
      </Stack>
    </Box>
  );
};

export default Settings;
