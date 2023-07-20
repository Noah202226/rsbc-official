"use client";

import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href={"/"}>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Image
              alt="rsbcLogo"
              className="rsbcLogo"
              src={"/rsbc.jpg"}
              width={30}
              height={30}
            />
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
            <Link href={"/"}>
              <Typography variant="h6" fontFamily={"serif"}>
                Home
              </Typography>
            </Link>
          </li>
          <li onClick={showMenu ? toggleMenu : () => {}}>
            <Link href={"/services"}>
              <Typography variant="h6" fontFamily={"serif"}>
                Services
              </Typography>
            </Link>
          </li>
          <li onClick={showMenu ? toggleMenu : () => {}}>
            <Link href={"/about"}>
              <Typography variant="h6" fontFamily={"serif"}>
                About
              </Typography>
            </Link>
          </li>
          <li onClick={showMenu ? toggleMenu : () => {}}>
            <Link href={"/contact"}>
              <Typography variant="h6" fontFamily={"serif"}>
                Contact
              </Typography>
            </Link>
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
