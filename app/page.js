"use client";
import WelcomeBanner from "./components/WelcomeBanner";
import Section from "./components/Section";
import ImagesContent from "./components/ImagesContent";
import { useEffect, useRef, useState } from "react";
import { db } from "./utils/firebase";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { useSearchParams } from "next/navigation";
import ColorTabs from "./components/ColoredTabs";

export default function Home() {
  const searchParams = useSearchParams();

  const search = searchParams.get("ref");

  const [selectedAgent, setSelectedAgent] = useState();

  const colRef = collection(db, "activeReferral");

  const [agentsList, setAgentsList] = useState([]);
  const agentColRef = collection(db, "agents");

  useEffect(() => {
    onSnapshot(agentColRef, (snapshot) => {
      setAgentsList([]);
      snapshot.docs.map((doc) => {
        setAgentsList((prev) => [...prev, { data: doc.data(), id: doc.id }]);
      });
    });
  }, []);

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false; // Set the ref to false to indicate subsequent renders
      return; // Skip the effect during the initial render
    }
    if (search) {
      const referalAgent = agentsList.filter(
        (agent) => agent.data.name == search
      );

      if (referalAgent.length > 0) {
        setSelectedAgent(referalAgent[0]?.data?.name);
      } else {
        alert("invalid ref link. agent not found");
        getDoc(doc(db, "activeReferral", "w621XQGQGnFN3k6DjqQM"))
          .then((data) => {
            setSelectedAgent(data?.data()?.name);
            return;
          })
          .catch((e) => console.log(e));
      }
    } else {
      getDoc(doc(db, "activeReferral", "w621XQGQGnFN3k6DjqQM"))
        .then((data) => {
          setSelectedAgent(data?.data()?.name);
          return;
        })
        .catch((e) => console.log(e));
    }
  }, [agentsList]);

  return (
    <>
      <WelcomeBanner selectedAgent={selectedAgent} />
      <Section />
      <ColorTabs />

      <ImagesContent />
    </>
  );
}
