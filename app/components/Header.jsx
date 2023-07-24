"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  function smoothScrollTo(target) {
    const element = document.getElementById(target);
    console.log("scrolling..");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href={"/"}>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Image alt="rsbcLogo" src={"/rsbc.jpg"} width={30} height={30} />
            <Typography
              variant="h4"
              fontFamily={"serif"}
              color={"#ef4b4b"}
              ml={1}
            >
              RSBC
            </Typography>
          </Stack>
        </Link>
        <ul className={`navbar-links ${showMenu ? "show" : ""}`}>
          <li onClick={showMenu ? toggleMenu : () => {}}>
            <Typography
              variant="h6"
              fontFamily={"serif"}
              onClick={() => smoothScrollTo("header")}
            >
              Home
            </Typography>
          </li>
          <li onClick={showMenu ? toggleMenu : () => {}}>
            <Typography
              variant="h6"
              fontFamily={"serif"}
              onClick={() => smoothScrollTo("why")}
            >
              Why Choose us
            </Typography>
          </li>

          <li onClick={showMenu ? toggleMenu : () => {}}>
            <Typography
              variant="h6"
              fontFamily={"serif"}
              onClick={() => smoothScrollTo("why")}
            >
              Multi Purpose Bank
            </Typography>
          </li>

          <li onClick={showMenu ? toggleMenu : () => {}}>
            <Typography
              variant="h6"
              fontFamily={"serif"}
              onClick={() => smoothScrollTo("loan-types")}
            >
              Loan Types
            </Typography>
          </li>
          <li onClick={showMenu ? toggleMenu : () => {}}>
            <Typography
              variant="h6"
              fontFamily={"serif"}
              onClick={() => smoothScrollTo("footer")}
            >
              Contact
            </Typography>
          </li>
        </ul>
        <div className={"navbar-hamburger"} onClick={toggleMenu}>
          <div
            className={`${"hamburger-line"} ${showMenu ? "hide" : ""}`}
          ></div>
          <div
            className={`${"hamburger-line"} ${showMenu ? "rotateTop" : ""}`}
          ></div>
          <div
            className={`${"hamburger-line"} ${showMenu ? "rotateBottom" : ""}`}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
