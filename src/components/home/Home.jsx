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
    </div>
  );
};

export default Home;
