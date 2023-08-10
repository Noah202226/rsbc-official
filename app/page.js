"use client";
import WelcomeBanner from "./components/WelcomeBanner";
import Section from "./components/Section";
import ImagesContent from "./components/ImagesContent";
import { useEffect, useRef, useState } from "react";
import { db } from "./utils/firebase";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { useSearchParams } from "next/navigation";
import ColorTabs from "./components/ColoredTabs";
import TabsForBanks from "./components/TabsForBanks";
import { Flip, ToastContainer, Zoom, toast } from "react-toastify";
import Footer from "./components/Footer";
import ElevateAppBar from "./components/ElevateAppBar";
import { Container } from "@mui/material";
import EmailForm from "./components/EmailForm";

export default function Home() {
  const searchParams = useSearchParams();

  const search = searchParams.get("ref");

  const [selectedAgent, setSelectedAgent] = useState("");
  const [selectedAgentEmail, setSelectedAgentEmail] = useState("");

  const colRef = collection(db, "activeReferral");

  const [agentsList, setAgentsList] = useState([]);
  const agentColRef = collection(db, "agents");

  const [settings, setSettings] = useState([]);
  const settingsRef = collection(db, "settings");

  useEffect(() => {
    onSnapshot(agentColRef, (snapshot) => {
      setAgentsList([]);
      snapshot.docs.map((doc) => {
        setAgentsList((prev) => [...prev, { data: doc.data(), id: doc.id }]);
      });
    });

    onSnapshot(settingsRef, (snapshot) => {
      setSettings([]);
      snapshot.docs.map((doc) => {
        setSettings((prev) => [...prev, { data: doc.data(), id: doc.id }]);
      });
    });

    // Intersection Observation
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
          // if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
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
        console.log(referalAgent[0]?.data?.email);
        setSelectedAgent(referalAgent[0]?.data?.name);
        setSelectedAgentEmail(referalAgent[0]?.data?.email);
      } else {
        alert("invalid ref link. agent not found");
        getDoc(doc(db, "activeReferral", "w621XQGQGnFN3k6DjqQM"))
          .then((data) => {
            setSelectedAgent(data?.data()?.name);
            setSelectedAgentEmail(data?.data()?.email);
            return;
          })
          .catch((e) => console.log(e));
      }
    } else {
      getDoc(doc(db, "activeReferral", "w621XQGQGnFN3k6DjqQM"))
        .then((data) => {
          setSelectedAgent(data?.data()?.name);
          setSelectedAgentEmail(data?.data()?.email);
          return;
        })
        .catch((e) => console.log(e));
    }
  }, [agentsList]);

  return (
    <>
      <ElevateAppBar />
      <Container maxWidth="xl">
        <WelcomeBanner
          selectedAgent={selectedAgent}
          words={settings}
          selectedAgentEmail={selectedAgentEmail}
        />
        <Section />

        <TabsForBanks />
        <ImagesContent settings={settings} />
      </Container>
      <Footer
        footerTitle={settings[0]?.data?.title}
        footerEmail={settings[0]?.data?.email}
        footerContact={settings[0]?.data?.contact}
        footerAddress1={settings[0]?.data?.address1}
        footerAddress2={settings[0]?.data?.address2}
      />
      <ToastContainer
        enableMultiContainer
        containerId={"home-notifications"}
        position={toast.POSITION.TOP_CENTER}
        pauseOnHover={false}
        transition={Zoom}
        autoClose={3000}
      />
    </>
  );
}
