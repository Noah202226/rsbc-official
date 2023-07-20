import { Container } from "@mui/material";
import ElevateAppBar from "./components/ElevateAppBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RSBC MARKETING",
  description: "RSBC MARKETING, Created by NOAH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="header" className={inter.className} style={{}}>
        <ElevateAppBar />
        <Container maxWidth="xl">{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
