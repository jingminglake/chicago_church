import React from "react";
import { useNavigate } from "react-router";

import "./nav.scss";

const Nav = () => {
  const nav = useNavigate();

  return (
    <div className='nav-parent'>
      <div className='nav-inner'>
        {/* <div className='nav-left'> */}
        {/* <div className='nav-m pointer' onClick={() => nav("/")}> */}
        <img src='/assets/nav/mainlogo.webp' className='nav-img' />
        {/* </div> */}
        {/* </div> */}
        {/* <div className='nav-right'>
          <div className='nav-q nav-wh' onClick={() => nav("/")}>
            HOME
          </div>
          <div className='nav-q nav-wh'>ABOUT</div>

          <div className='nav-q nav-wh' onClick={() => nav("/connect")}>
            CONNECT
          </div>

          <div className='nav-o nav-q nav-wh'>
            <div className='nav-w'>CONTACT</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Nav;
