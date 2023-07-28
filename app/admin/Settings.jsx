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

  // Words
  const [word1, setWord1] = useState();
  const [word2, setWord2] = useState();
  const [word3, setWord3] = useState();
  const [word4, setWord4] = useState();
  const [word5, setWord5] = useState();

  // Images
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();

  const colRef = collection(db, "settings");

  const updateImages = () => {
    setDoc(doc(db, "settings", "images"), {
      image1,
      image2,
      image3,
    })
      .then(() =>
        toast.success("Images updated", { containerId: "admin-notifications" })
      )
      .catch((e) =>
        toast.error("Failed to save images" + e, {
          containerId: "admin-notifications",
        })
      );
  };

  const updateWords = () => {
    console.log(word1, word2, word3, word4, word5);

    setDoc(doc(db, "settings", "scrolling-words"), {
      word1,
      word2,
      word3,
      word4,
      word5,
    })
      .then(() =>
        toast.success("Words updated", { containerId: "admin-notifications" })
      )
      .catch((e) =>
        toast.error("Failed" + e, { containerId: "admin-notifications" })
      );
  };

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
    console.log(settings[2]);

    setFooterTitle(settings[0]?.data?.title);
    setFooterEmail(settings[0]?.data?.email);
    setFooterContact(settings[0]?.data?.contact);
    setFooterAddress1(settings[0]?.data?.address1);
    setFooterAddress2(settings[0]?.data?.address2);

    setWord1(settings[2]?.data?.word1);
    setWord2(settings[2]?.data?.word2);
    setWord3(settings[2]?.data?.word3);
    setWord4(settings[2]?.data?.word4);
    setWord5(settings[2]?.data?.word5);

    setImage1(settings[1]?.data?.image1);
    setImage2(settings[1]?.data?.image2);
    setImage3(settings[1]?.data?.image3);
  }, [settings]);

  return (
    <Box>
      <Box>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          my={1}
        >
          <Typography variant="h6">Images</Typography>
          <Button variant="contained" color="warning" onClick={updateImages}>
            Update Images
          </Button>
        </Stack>

        <Stack>
          <TextField
            helperText="Image 1"
            value={image1}
            onChange={(e) => setImage1(e.target.value)}
          />
          <TextField
            helperText="Image 2"
            value={image2}
            onChange={(e) => setImage2(e.target.value)}
          />
          <TextField
            helperText="Image 3"
            value={image3}
            onChange={(e) => setImage3(e.target.value)}
          />
        </Stack>
      </Box>

      <Box>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          my={1}
        >
          <Typography variant="h6">Scrolling words</Typography>
          <Button variant="contained" color="warning" onClick={updateWords}>
            Update words
          </Button>
        </Stack>

        <Stack>
          <TextField
            helperText="Word 1"
            value={word1}
            onChange={(e) => setWord1(e.target.value)}
          />
          <TextField
            helperText="Word 2"
            value={word2}
            onChange={(e) => setWord2(e.target.value)}
          />
          <TextField
            helperText="Word 3"
            value={word3}
            onChange={(e) => setWord3(e.target.value)}
          />
          <TextField
            helperText="Word 4"
            value={word4}
            onChange={(e) => setWord4(e.target.value)}
          />
          <TextField
            helperText="Word 5"
            value={word5}
            onChange={(e) => setWord5(e.target.value)}
          />
        </Stack>
      </Box>

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
