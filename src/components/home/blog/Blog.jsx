import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./blog.scss";

import { blogs } from "./blogs";

const Blog = () => {
  const nav = useNavigate();

  function goLeft() {
    const c = $(".blog-inner");

    c.scrollLeft(c.scrollLeft() - 180);
  }

  function goRight() {
    const c = $(".blog-inner");

    c.scrollLeft(c.scrollLeft() + 180);
  }

  return (
    <section className='blog-parent'>
      <div className='home-f22c28' style={{ margin: "15px 0" }}>
        Events and News
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
        <div className='blog-inner'>
          {/* <div className='blog-mapcon'> */}
          {blogs.map((v) => (
            <div className='blog-map' onClick={() => nav(`/blog/${v.id}`)}>
              <img
                src='/assets/home/487147_3fb21a460ea840f08b896c1b6839e9e8mv2.png'
                className='blog-img'
              />
              <div className='blog-title blog-a'>{v.title}</div>
              <div className='blog-b blog-a'>By: {v.author}</div>
              <div className='blog-c blog-a'>{v.date}</div>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
