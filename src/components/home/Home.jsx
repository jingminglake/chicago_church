import React, { useEffect } from "react";
import Blog from "./blog/Blog";

import "./home.scss";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className='home-s'>
      <div
        style={{ backgroundImage: `url(${"/assets/home/top.webp"})` }}
        className='home-top'
      >
      
        <div className='home-qw'>
          <div className='home-q'>认识基督</div>

          <div className='home-w'>享受祂的丰富</div>
        </div>
      </div>

      <Blog />

      <section className='home-we'>
        <div className='home-wer'>
          <div className='home-qz'>
            <div className='home-f22c28 text-ac' style={{ marginTop: "0" }}>
              JOIN US IN BRIDGEPORT!
            </div>

            <div className='home-f22nb text-ac'>Sunday 4 PM</div>
            <div className='home-f22nb text-ac'>Worship & Communion</div>

            <a
              className='home-f22nb text-ac home-a'
              style={{ marginTop: "10px" }}
              href={`https://www.google.com/maps/dir/?api=1&destination=${"301 W 31st St Chicago, IL 60616"}`}
              target='_blank'
              rel='noreferrer'
            >
              301 W 31st St <br />
              Chicago, IL 60616
            </a>

            <div className='nav-w home-wewh pointer'>CONNECT</div>
          </div>
        </div>
        <div
          className='home-weimg'
          style={{
            backgroundImage: `url(/assets/home/986929_3d6a116bdd33417c99e2fa0ef76180af_mv2.webp)`,
          }}
        ></div>
      </section>

      <div className='home-hea c2b475c'>我们所相信的</div>

      <section className='home-rw' style={{ marginBottom: "50px" }}>
        <div className='home-rwch'>
          <div className='home-rwchin'>
            “等到圣灵从上浇灌我们，旷野就变为肥田，肥田看如树林。” — 以赛亚书
            32:15
          </div>
        </div>
        <div className='home-rwch'>
          <div className='home-rwchin'>
            “神爱我们的心，我们也知道也信。神就是爱；住在爱里面的，就是住在神里面，神也住在他里面。”
            — 约翰一书 4:16
          </div>
        </div>
        <div className='home-rwch'>
          <div className='home-rwchin'>
            “既在十字架上灭了冤仇，便藉这十字架使两下归为一体，与神和好了，并且来传和平的福音给你们远处的人，也给那近处的人。”
            — 以弗所书 2:16-17
          </div>
        </div>
      </section>

      <section className='home-we'>
        <div className='home-wer home-bge8'>
          <div className='home-qz'>
            <div className='home-f22c28 text-ac' style={{ margin: 0 }}>
              Interested in Bible study?
            </div>

            <div className='home-divider' />

            <div className='home-f22nb text-ac'>
              Meet 1-on-1 or in a small group to
              <br /> explore the Christian faith and <br />
              dive deeper into the Bible
            </div>

            <div className='text-ac home-f22nb' style={{ marginTop: "15px" }}>
              Contact us at{" "}
              <a
                href='mailto:cn.churchofthechicagoans@gmail.com'
                className='home-mailto'
              >
                cn.churchofthechicagoans@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div
          className='home-weimg'
          style={{
            backgroundImage:
              "url(/assets/home/487147_3fb21a460ea840f08b896c1b6839e9e8mv2.png)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default Home
