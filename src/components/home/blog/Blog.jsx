import React, { useCallback, useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import "./blog.scss";

import { blogs } from "./blogs";

const Blog = () => {
  const nav = useNavigate();
  const ref = useRef();
  const timerRef = useRef(null);

  const { t } = useTranslation();

  function goLeft() {
    //test
    ref.current.scrollLeft -= 420;

    //reset timer
    start();
  }

  function goRight() {
    ref.current.scrollLeft += 420;

    //reset timer
    start();
  }

  function autoScroll() {
    if (
      Math.ceil($(".blog-inner").scrollLeft()) >=
      ref.current.scrollWidth - $(".blog-inner").outerWidth()
    ) {
      ref.current.scrollLeft = 0;
    } else {
      goRight();
    }
  }

  const start = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current); // Clear the previous interval
    }
    timerRef.current = setInterval(autoScroll, 5000); // Start a new interval
  };

  useEffect(() => {
    start();

    return () => clearInterval(timerRef.current);
  }, []);

  const innerscroll = useCallback(() => {
    //reset the timer
    start();
  }, []);

  $(".blog-inner").unbind("scroll", innerscroll).on("scroll", innerscroll);

  // console.log($(".blog-inner").outerWidth(), "width");

  return (
    <section className='blog-parent'>
      <div className='home-f22c28' style={{ margin: "15px 0" }}>
        {t("home.t3")}
      </div>

      <div className='blog-p'>
        <div className='blog-ab'>
          <div className='blog-t blog-left' onClick={() => goLeft()}>
            <div className='blog-arrow' />
          </div>

          <div className='blog-t blog-right' onClick={() => goRight()}>
            <div className='blog-arrow' />
          </div>
        </div>
        <div className='blog-inner' ref={ref}>
          {/* <div className='blog-mapcon'> */}
          {blogs
            .slice()
            .reverse()
            .map((v) => (
              <div className='blog-mq'>
                <div className='blog-map' onClick={() => nav(`/blog/${v.id}`)}>
                  <div className='blog-imgcon'>
                    <img src={v.img} className='blog-img' />
                  </div>

                  <div className='blog-title blog-a ellipsis'>{v.title}</div>
                  <div className='blog-b blog-a ellipsis'>
                    联系人: {v.author}
                  </div>
                  <div className='blog-c blog-a ellipsis'>{v.date}</div>
                </div>
              </div>
            ))}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
