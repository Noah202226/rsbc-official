import { Stack, Typography } from "@mui/material";
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
          <Typography variant="h4" fontFamily={"serif"} color={"#ef4b4b"}>
            RSBC
          </Typography>
        </Link>
        <ul className={`navbar-links ${showMenu ? "show" : ""}`}>
          <li>
            <Link href={"/"}>
              <Typography variant="h6" fontFamily={"sans-serif"}>
                Home
              </Typography>
            </Link>
          </li>
          <li>
            <Link href={"/services"}>
              <Typography variant="h6" fontFamily={"sans-serif"}>
                Services
              </Typography>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <Typography variant="h6" fontFamily={"sans-serif"}>
                About
              </Typography>
            </Link>
          </li>
          <li>
            <Link href={"/contact"}>
              <Typography variant="h6" fontFamily={"sans-serif"}>
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
