import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { blogs } from "../home/blog/blogs";

import "./b.scss";

const SingleBlog = () => {
  const params = useParams();

  const [notFound, setNotFound] = useState(false);

  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const id = params.id;

    const find = blogs.find((v) => v.id === Number(id));

    if (!find) {
      setNotFound(true);
      return;
    }

    setSelectedBlog(find);
  }, []);

  console.log(selectedBlog);

  if (!selectedBlog) return;

  return (
    <div
      className='b-parent'
      style={{ marginTop: $(".nav-parent").outerHeight() + 30 + "px" }}
    >
      <div className='b-inner'>
        <img src={selectedBlog.img} className='b-img' />

        <div className='b-title'>{selectedBlog.title}</div>
        <div className='b-by'>By: {selectedBlog.author}</div>

        <pre className='b-body'>{selectedBlog.body}</pre>
      </div>
    </div>
  );
};

export default SingleBlog;
