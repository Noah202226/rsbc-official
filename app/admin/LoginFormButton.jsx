import { Button } from "@mui/material";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import React from "react";
import { db } from "../utils/firebase";
import { toast } from "react-toastify";

const LoginFormButton = ({ formRef, setIsLogged }) => {
  const docRef = collection(db, "admin");

  const checkUser = (e) => {
    e.preventDefault();

    const userinput = formRef.current.children[1].children[0].children[0].value;
    const passinput = formRef.current.children[2].children[0].children[0].value;

    const q = query(
      docRef,
      where("user", "==", userinput),
      where("password", "==", passinput)
    );
    getDocs(q)
      .then((data) => {
        if (data.docs.length > 0) {
          console.log("account found ");
          toast.success("Login successfully.", {
            containerId: "admin-notifications",
          });
          setIsLogged(true);
        } else {
          console.log("account not found.");
          toast.error("Login failed.", { containerId: "admin-notifications" });
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <Button fullWidth variant="contained" type="submit" onClick={checkUser}>
      Login
    </Button>
  );
};

export default LoginFormButton;
