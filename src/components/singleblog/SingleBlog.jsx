import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./b.scss";

const SingleBlog = ({ blogState, setBlogState }) => {
  console.log(blogState, "state");

  const params = useParams();
  const nav = useNavigate();

  // const [notFound, setNotFound] = useState(false);

  // const [selectedBlog, setSelectedBlog] = useState(null);

  // useEffect(() => {
  //   const id = params.blogid;

  //   const find = blogs.find((v) => v.id === Number(id));

  //   if (!find) {
  //     setNotFound(true);
  //     return;
  //   }

  //   setSelectedBlog(find);
  // }, []);

  useEffect(() => {
    $("html").css("overflow-y", "hidden");

    return () => {
      $("html").css("overflow-y", "auto");
    };
  }, []);

  // if (!blogState?.blog) return;

  return (
    <div
      className='b-parent'
      // style={{ marginTop: $(".nav-parent").outerHeight() + 30 + "px" }}
      onClick={() => nav("/")}
    >
      <div className='b-inner' onClick={(e) => e.stopPropagation()}>
        <img src={blogState.blog.img} className='b-img' />

        <div className='b-title'>{blogState.blog.title}</div>
        <div className='b-by'>By: {blogState.blog.author}</div>

        <pre className='b-body'>{blogState.blog.body}</pre>
      </div>

      <div className='x b-x' onClick={() => setBlogState({ display: false })} />
    </div>
  );
};

export default SingleBlog;
