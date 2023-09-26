import React from "react";

import "./footer.scss";
import { Address } from "./svg/Address";
import Email from "./svg/Email";
import Phone from "./svg/Phone";

const Footer = () => {
  return (
    <div className='footer-parent'>
      <div className='footer-inner'>
        <div className='footer-top'>
          <img src='/assets/footer/footerlogo_1.webp' />

          <div className='footer-q'>
            "...the surpassing worth of knowing Christ Jesus my Lord"
          </div>
        </div>

        <div className='footer-divider' />

        <div className='footer-con footer-bot'>
          <a
            className='footer-r'
            href='mailto:cn.churchofthechicagoans@gmail.com'
          >
            <Email />
            <div className='footer-rc'>cn.churchofthechicagoans@gmail.com</div>
          </a>

          <div className='footer-r'>
            <Phone />
            <div className='footer-rc'>732-310-2214</div>
          </div>

          <a
            className='footer-r'
            href={`https://www.google.com/maps/dir/?api=1&destination=${"301 W 31st St Chicago, IL 60616"}`}
            target='_blank'
            rel='noreferrer'
          >
            <Address />
            <div className='footer-rc'>301 W 31st St Chicago, IL 60616</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
