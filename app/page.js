"use client";
import WelcomeBanner from "./components/WelcomeBanner";
import Section from "./components/Section";
import ImagesContent from "./components/ImagesContent";
import { useEffect, useState } from "react";
import { db } from "./utils/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();

  const search = searchParams.get("ref");

  const [selectedAgent, setSelectedAgent] = useState();

  const colRef = collection(db, "activeReferral");
  useEffect(() => {
    if (search) {
      setSelectedAgent(search);
      return;
    }
    console.log("fetching agents");
    onSnapshot(colRef, (snapshot) => {
      snapshot.docs.map((doc) => {
        setSelectedAgent(doc.data().name);
      });
    });
  }, []);
  return (
    <>
      <WelcomeBanner selectedAgent={selectedAgent} />
      <Section />
      <ImagesContent />
    </>
  );
}
