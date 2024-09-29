import React from "react";
import { useNavigate } from "react-router";

import "./nav.scss";

const Nav = () => {
  const nav = useNavigate();
  const path = window.location.pathname;

  return (
    <nav className='topnav'>
      {/* <img src='assets/nav/mainlogo.webp' /> */}
      <img src='assets/nav/test.png' />

      {/* <h2 className='site-title' onClick={()=> nav('/')}>The Church of the Chicagoans</h2> */}

      {/* <div className='grow' /> */}
      <ul>
        <li onClick={() => nav("/")}>Home</li>
        <li onClick={() => nav("/about")}>About</li>
        {/* <li onClick={() => nav("/about")}>Campuses</li> */}
        <li onClick={() => nav("/about")}>Locations</li>

        <li onClick={() => nav("/contact")}>Contact</li>
        {/* <li>
          <a href='https://www.thechurchofthechicagoans.org/'>Eng Website</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
