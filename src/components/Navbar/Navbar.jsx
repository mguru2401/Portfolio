import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { imageUrl } from "../../utils";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Hello World 👋🏻
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menubtn}
          src={
            open ? imageUrl("nav/closeIcon.png") : imageUrl("nav/menuIcon.png")
          }
          alt="hamburger-menu-icon"
          onClick={() => setOpen(!open)}
        />
        <ul
          className={`${styles.menuItems} ${open && styles.menuOpen}`}
          onClick={() => setOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          {/* <li>
            <a href="#projects">Projects</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
