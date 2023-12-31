import { Container } from "@mui/material";
import ElevateAppBar from "./components/ElevateAppBar";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RSBC MARKETING",
  description: "RSBC MARKETING, Created by NOAH",
  keywords: ['RSBC MARKETING','RSBC MARKETING WEBSITE','RSBC MARKETING APPLICATION', 'AGENT LOAN APP', 'RSBC LOAN APPLICATION']
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="header" className={inter.className} style={{}}>
        {children}
      </body>
    </html>
  );
}
