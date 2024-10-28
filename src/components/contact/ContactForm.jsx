import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

const ContactForm = ({ selectedLocation }) => {
  const { t } = useTranslation();

  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

  const [message, setMessage] = useState(null);

  //text area increase height when overflow
  useEffect(() => {
    $(".contact-form-ta")
      .each(function () {
        this.setAttribute(
          "style",
          "height:" + this.scrollHeight + "px;overflow-y:hidden;"
        );
      })
      .on("input", function () {
        this.style.height = 0;
        this.style.height = this.scrollHeight + "px";
      });
  }, []);

  return (
    <div className='contact-form-parent'>
      <div className='contact-form-con'>
        <input
          className='contact-form-input'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
        />
      </div>

      <div className='contact-form-con'>
        <input
          className='contact-form-input'
          value={name}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='Phone'
        />
      </div>

      <div className='contact-form-con'>
        <input
          className='contact-form-input'
          value={name}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email (optional)'
        />
      </div>

      <div className='contact-form-con'>
        <textarea
          className='contact-form-ta'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Message'
        />
      </div>

      <div className='default-button'>
        <div>Submit</div>
        <i className='fas fa-angle-down fa-sm' />
      </div>
    </div>
  );
};

export default ContactForm;
