import Image from "next/image";

import WelcomeBanner from "./components/WelcomeBanner";
import Section from "./components/Section";
import ImagesContent from "./components/ImagesContent";

export default function Home() {
  return (
    <>
      <WelcomeBanner />
      <Section />
      <ImagesContent />
    </>
  );
}
