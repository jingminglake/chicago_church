import React from "react";

import "./footer.scss";
import { Address } from "./svg/Address";
import Email from "./svg/Email";

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
          <a className='footer-r' href='mailto:exampleemail@gmail.com'>
            <Email />
            <div className='footer-rc'>exampleemail@gmail.com</div>
          </a>

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
