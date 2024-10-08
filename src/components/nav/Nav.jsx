import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

import { clickout } from "../../helpers/clickout";

import "./nav.scss";

import LanguageSelection from "../../globalcomponents/LanguageSelection";

const Nav = () => {
  const nav = useNavigate();

  const screenWidth = useSelector((state) => state.screenWidth);

  const [menuOpen, setMenuOpen] = useState(false);

  const languageReadyState = useSelector((state) => state.languageReadyState);

  const handleLinkClick = (path) => {
    setMenuOpen(false); // Toggle menu -> false when link is clicked
    nav(path);
  };

  const toggleMenu = () => {
    //when
    // setMenuOpen(!menuOpen); // Toggle menu open/close state

    //when changing states in usestate, in toggling situations, always use the callback - jack
    setMenuOpen((prev) => !prev);
  };

  //close the menu when user clicks something else
  const c = useCallback(() => {
    clickout(
      [`nav-main`, `nav-menu-open`],
      `nav-menu-open`,
      setMenuOpen,
      false
    );
  }, []);

  $(document).unbind("click", c).click(c);

  return (
    <nav className='topnav' id='nav-main'>
      <div className='nav-inner'>
        {screenWidth <= 800 && (
          <div className='hamburger'>
            <button className='bars-button' onClick={() => toggleMenu()}>
              <i class='fa-solid fa-bars'></i>
            </button>
          </div>
        )}

        <div className={`nav-logo`}>
          <img src='assets/nav/test.png' alt='Logo' />
        </div>

        {screenWidth > 800 && <div className='grow' />}

        {/* {screenWidth > 800 && ( */}
        <ul
          className={`links ${menuOpen ? "menu-open" : ""}`}
          id='nav-menu-open'
        >
          <li onClick={() => handleLinkClick("/")}>Home</li>
          <li onClick={() => handleLinkClick("/about")}>About</li>
          {/* <li onClick={() => nav("/about")}>Campuses</li> */}
          <li onClick={() => handleLinkClick("/locations")}>Locations</li>

          <li onClick={() => handleLinkClick("/contact")}>Contact</li>
        </ul>
        {/* )} */}

        {languageReadyState && <LanguageSelection />}
      </div>
    </nav>
  );
};

export default Nav;
