import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
import { makePostRequest } from "../../helpers/requests";

import { dispatchSetLoading } from "../../store//global/loading";
import { checkInput } from "../../helpers/inputCheck";

const ContactForm = ({ selectedLocation }) => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  //error states
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);

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

  async function handleSubmit() {
    //check form for errors
    const validation = checkInput(
      [
        {
          value: name,
          condition: "novalue",
          onInvalid: () => setNameError(true),
        },

        {
          value: phone,
          condition: "novalue",
          onInvalid: () => setPhoneError(true),
        },

        {
          value: message,
          condition: "novalue",
          onInvalid: () => setMessageError(true),
        },
      ],
      [setNameError, setMessageError, setPhoneError]
    );

    if (!validation) {
      return;
    }

    //setloading
    dispatch(dispatchSetLoading(true));

    const obj = { name, phone, email, message, location: selectedLocation };

    await makePostRequest("email/sendmessage", obj)
      .then((res) => {
        if (res === "success") {
          dispatch(dispatchSetLoading(false));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(dispatchSetLoading(false));
      });
  }

  return (
    <div className='contact-form-parent'>
      <div className='contact-form-con'>
        {nameError && (
          <div className='f-s-main contact-form-err'>Name is required!</div>
        )}
        <input
          className='contact-form-input'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
        />
      </div>

      <div className='contact-form-con'>
        {phoneError && (
          <div className='f-s-main contact-form-err'>Phone is required!</div>
        )}
        <input
          className='contact-form-input'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='Phone'
        />
      </div>

      <div className='contact-form-con'>
        <input
          className='contact-form-input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email (optional)'
        />
      </div>

      <div className='contact-form-con'>
        {messageError && (
          <div className='f-s-main contact-form-err'>Message is required!</div>
        )}
        <textarea
          className='contact-form-ta'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Message'
        />
      </div>

      <div className='default-button' onClick={() => handleSubmit()}>
        <div>Submit</div>
        <i className='fas fa-angle-down fa-sm' />
      </div>
    </div>
  );
};

export default ContactForm;
