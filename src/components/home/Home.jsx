import React from "react";

import "./home.scss";

const Home = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${"/assets/home/top.jpeg"})` }}
        className='home-top'
      >
        <div className='home-qw'>
          <div className='home-q'>KNOWING CHRIST</div>

          <div className='home-w'>and making Him known</div>
        </div>
      </div>

      <div className='home-we'>
        <div className='home-wer'>
          <div className='home-f22c28'>JOIN US IN BRIDGEPORT!</div>

          <div className='home-f22nb'>Sunday 4 PM</div>
          <div className='home-f22nb'>Worship & Communion</div>

          <div className='home-f22nb' style={{ marginTop: "10px" }}>
            301 W 31st St
          </div>
          <div className='home-f22nb'>Chicago, IL 60616</div>

          <div className='nav-w home-wewh'>CONNECT</div>
        </div>
        <div
          className='home-weimg'
          style={{
            backgroundImage: `url(/assets/home/986929_3d6a116bdd33417c99e2fa0ef76180af_mv2.webp)`,
          }}
        ></div>
      </div>

      <div className='home-hea c2b475c'>OUR HEART & MISSION</div>

      <div className='home-rw'>
        <div className='home-rwch'>
          <div className='home-rwchin'>
            To see lives changed by Jesus Christ through the Word of God and the
            Holy Spirit
          </div>
        </div>
        <div className='home-rwch'>
          <div className='home-rwchin'>
            To love God and people, and help others to do the same
          </div>
        </div>
        <div className='home-rwch'>
          <div className='home-rwchin'>
            To participate in Jesus's Great Commission to make disciples of all
            the nations
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
