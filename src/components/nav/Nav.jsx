import React from "react";
import { useNavigate } from "react-router";

import "./nav.scss";

const Nav = () => {
  const nav = useNavigate();

  return (
    <div className='nav-parent'>
        <div className='nav-frame'>
          <nav className='topnav'>
            {/* Image/Logo; removed as of now
            <img src='assets/nav/mainlogo.webp'/> */}
            {/* <a className='active' href='#home'>首页</a>
            <a href='#about'>关于</a>
            <a href='#contact'>联系</a>
            <a href="https://www.thechurchofthechicagoans.org/">英文网站</a> */}
            <div onClick={()=> nav('/')}>Home</div>
            <div onClick={()=> nav('/about')}>About</div>
            <div onClick={()=> nav('/contact')}>Contact</div>

            <a href="https://www.thechurchofthechicagoans.org/">英文网站</a>
          </nav>
        </div>
        {/* <div className='nav-left'> */}
            {/*
        <div className='nav-m pointer' onClick={() => nav("/")}>
          <img src='/assets/nav/mainlogo.webp' className='nav-img' />
        </div>
          <div className='nav-right topnav'>
            <a className='active' href='#home'>HOME</a>
            <a href='#about'>ABOUT</a>
            <a href='#connect'>CONNECT</a>
            <a className='box' href='#contact'>CONTACT</a>
            <a href="https://www.thechurchofthechicagoans.org/">ENGLISH WEBSITE</a>
          </div>
            */}
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
  );
};

export default Nav;
