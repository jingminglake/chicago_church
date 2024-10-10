import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { blogs } from "./blog/blogs";

import "./home.scss";

//components
import Blog from "./blog/Blog";
import SingleBlog from "../singleblog/SingleBlog";

const Home = () => {
  const params = useParams();

  const { t } = useTranslation();

  const [blogState, setBlogState] = useState({ display: false });

  useEffect(() => {
    const blogid = params.blogid;

    if (blogid) {
      const find = blogs.find((t) => t.id === Number(blogid));

      if (!find) {
        setBlogState({ display: false });

        return;
      }

      setBlogState({
        display: true,
        blog: find,
      });
    } else {
      setBlogState({ display: false });
    }
  }, [window.location.href]);

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
          <div className='home-qepo'>
            <div className='home-q'>{t("home.t1")}</div>

            <div className='home-w'>{t("home.t2")}</div>
          </div>
        </div>
      </div>

      <Blog />

      <section className='home-we'>
        <div className='home-wer'>
          <div className='home-qz'>
            <div className='home-f22c28 text-ac' style={{ marginTop: "0" }}>
              {t("home.t4")}
            </div>

            <div className='home-f22nb text-ac'>{t("home.p1")}</div>
            <div className='home-f22nb text-ac'>{t("home.p2")}</div>

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

      <section className='home-s4'>
        <div className='home-hea c2b475c'>{t("home.t5")}</div>

        <div className='home-rw'>
          <div className='home-rwch'>
            <div className='home-rwchin'>{t("home.p3")}</div>
          </div>
          <div className='home-rwch'>
            <div className='home-rwchin'>{t("home.p4")}</div>
          </div>
          <div className='home-rwch'>
            <div className='home-rwchin'>{t("home.p5")}</div>
          </div>
        </div>
      </section>

      <section className='home-we'>
        <div className='home-wer home-bge8'>
          <div className='home-qz'>
            <div className='home-f22c28 text-ac' style={{ margin: 0 }}>
              {t("home.t6")}
            </div>

            <div className='home-divider' />

            <div className='home-f22nb text-ac'>
              {t("home.p6")}
              <br /> {t("home.p7")} <br />
              {t("home.p8")}
            </div>

            <div className='text-ac home-f22nb' style={{ marginTop: "15px" }}>
              {t("home.p9")} <br />
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

      {blogState?.display && (
        <SingleBlog blogState={blogState} setBlogState={setBlogState} />
      )}
    </div>
  );
};

export default Home;
