import React, { useState } from "react";
import { useNavigate } from "react-router";

import "./nav.scss";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useNavigate();

  const handleLinkClick = (path) => {
    setMenuOpen(false); // Toggle menu -> false when link is clicked
    nav(path);
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen) // Toggle menu open/close state
  }

  return (
    <nav className='topnav'>
      <div className='logo'>
        <img src='assets/nav/test.png' alt="Logo"/>
      </div>

      <div className='hamburger'>
        <button className='bars-button' onClick={toggleMenu}>
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>

      <ul className={`links ${menuOpen ? "menu-open" : ""}`}>
        <li onClick={() => handleLinkClick("/")}>Home</li>
        <li onClick={() => handleLinkClick("/about")}>About</li>
        {/* <li onClick={() => nav("/about")}>Campuses</li> */}
        <li onClick={() => handleLinkClick("/locations")}>Locations</li>

        <li onClick={() => handleLinkClick("/contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
