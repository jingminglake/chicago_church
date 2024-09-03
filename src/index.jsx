import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.scss";

import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import SingleBlog from "./components/singleblog/SingleBlog";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

ReactDOM.createRoot(document.getElementById("app")).render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/blog/:blogid' element={<Home />} />

          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  </>
);
