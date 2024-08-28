import React from "react";
import { useNavigate } from "react-router";

import "./nav.scss";

const Nav = () => {
  const nav = useNavigate();
  const path = window.location.pathname

  return (
    <nav className='topnav'>

      {/* Image/Logo; removed as of now
      <img src='assets/nav/mainlogo.webp'/> */}
            
      <h2 className='site-title' onClick={()=> nav('/')}>The Church of the Chicagoans</h2>

      <ul>
        <li onClick={()=> nav('/')}>Home</li>
        <li onClick={()=> nav('/about')}>About</li>
        <li onClick={()=> nav('/contact')}>Contact</li>
        <li>
          <a href="https://www.thechurchofthechicagoans.org/">Eng Website</a>
        </li>
      </ul>

    </nav>
  );
};

export default Nav;
