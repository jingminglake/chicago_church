import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { blogs } from "../home/blog/blogs";

import "./b.scss";

const SingleBlog = () => {
  const params = useParams();
  const nav = useNavigate();

  const [notFound, setNotFound] = useState(false);

  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const id = params.blogid;

    const find = blogs.find((v) => v.id === Number(id));

    if (!find) {
      setNotFound(true);
      return;
    }

    setSelectedBlog(find);
  }, []);

  useEffect(() => {
    $("html").css("overflow-y", "hidden");

    return () => {
      $("html").css("overflow-y", "auto");
    };
  }, []);

  if (!selectedBlog) return;

  //START HERE
  //ADD CLOSE BUTTON AND DISABLE SCROLL WHEN THE POPUP IS ACTIVE

  return (
    <div
      className='b-parent'
      // style={{ marginTop: $(".nav-parent").outerHeight() + 30 + "px" }}
      onClick={() => nav("/")}
    >
      <div className='b-inner' onClick={(e) => e.stopPropagation()}>
        <img src={selectedBlog.img} className='b-img' />

        <div className='b-title'>{selectedBlog.title}</div>
        <div className='b-by'>By: {selectedBlog.author}</div>

        <pre className='b-body'>{selectedBlog.body}</pre>
      </div>
    </div>
  );
};

export default SingleBlog;
