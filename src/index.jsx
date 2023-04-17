import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.scss";

import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";

ReactDOM.createRoot(document.getElementById("app")).render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </>
);
