import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./contact.scss";

import { locations, contacts } from "../../globalinfo/locations";

import AbsoluteSelect from "../../globalcomponents/AbsoluteSelect";
import LoadingComponent from "../../globalcomponents/LoadingComponent";
import ContactForm from "./ContactForm";

const Contact = () => {
  const screenWidth = useSelector((state) => state.screenWidth);

  //location that the user selected
  //we will force user to select location because
  //most user who fills out the form will not say their location
  //when we have locations in north and south side chicago, champaign, madison, etc,
  //it will be annoying to figure out who to contact for each person
  //if we dont ask for location
  const [selectedLocation, setSelectedLocation] = useState(null);

  console.log(selectedLocation, "sel");

  const [ready, setReady] = useState(false);

  //find if a user has previously selected a location
  useEffect(() => {
    const id = window.localStorage.getItem("loc");
    const find = locations.find((t) => t.id === Number(id));

    //if we find a location with that id, preselect that location
    if (find) {
      setSelectedLocation(find);
    }

    setReady(true);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!ready) {
    return <LoadingComponent />;
  }

  return (
    <div className='contact-parent'>
      <div className='contact-i1 index-cover'>
        <div className='contact-i1t'>Contact Us</div>
        <div className='contact-i1c'>
          <div className='contact-i1cbgcover'></div>
        </div>
      </div>

      <div className='contact-inner'>
        {/* <div className='contact'></div> */}

        <AbsoluteSelect
          state={{
            id: "contact-selectlocation",
            options: locations.map((t) => {
              return {
                name: t.name,
                value: t,
              };
            }),

            setValue: (v) => {
              setSelectedLocation(v);
              window.localStorage.setItem("loc", v.id);
            },
            name: selectedLocation?.name,
            novalue: "Select a Location",
            value: selectedLocation,
          }}
        />

        {selectedLocation?.id && (
          <div>
            <div className='contact-infocon'>
              <div className='contact-ih'>
                {selectedLocation.contacts.map((t) => {
                  const cur = contacts.find((v) => v.id === Number(t));

                  return (
                    <div className='contact-map-ch'>
                      {/* this image will be a photo of the person, blank placeholder for now*/}
                      <img className='contact-map-im' />
                      <div className='contact-map-info'>
                        <div className='contact-map-infoch contact-name f-s-main'>
                          {cur.name}
                          {/* chinese name here */}({cur.name})
                        </div>

                        <div className='contact-map-infoch contact-map-phone f-s-main'>
                          {cur.phone}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {screenWidth > 700 && ""}

              <div className='contact-divider'></div>

              <div className='contact-ih contact-ih-2'>
                <div>
                  <div className='f-t-main'>Send Us a Message!</div>
                  <div className='f-s-main contact-p'>
                    Questions or concerns, do not hesistate to reach out to us
                  </div>
                </div>

                <ContactForm selectedLocation={selectedLocation} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <div>
  
            <h3>Contact</h3>
            <br/>
            <p>Hyde Park (UChicago):</p>
            <ul>
                <li>
                Nuanliang Zhu - (872)-724-0733
                </li>
                <li>
                Weiyi Qian(Jonathan Qian) - (773)-219-8323
                </li>
            </ul>
            <br/>
            <p>Evanston (Northwestern):</p>
            <ul>
                <li>
                Han Tang - (312)-241-6688
                </li>
            </ul>
            <br/>
            <p>Bridgeport (Illinois Tech):</p>
            <ul>
                <li>
                Leon Hou - (303)-862-2647
                </li>
            </ul>
            <br/>
            <p>South Loop (UIC):</p>
            <ul>
                <li>
                Weidi Zhang - (732)-310-2214
                </li>
            </ul>
            <br/>
            <p>Chinatown:</p>
            <ul>
                <li>
                Bin Wang (Kevin Wang) - (312)-709-8172
                </li>
                <li>
                Meng Tong - (312)-375-5769
                </li>
            </ul>
  
        </div> */}
    </div>
  );
};

export default Contact;
