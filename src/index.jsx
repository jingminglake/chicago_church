import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.scss";

import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import SingleBlog from "./components/singleblog/SingleBlog";
import About from "./components/about/About";

ReactDOM.createRoot(document.getElementById("app")).render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <Nav />
        <div style={{
          marginTop:'100px',
        }}>
        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route exact path='/blog/:id' element={<SingleBlog />} />
          <Route exact path='/about' element={<About />} />

        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  </>
);
