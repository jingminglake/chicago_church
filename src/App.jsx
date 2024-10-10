import React, { useEffect, useCallback } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//css
import "./index.scss";
import "./globalcomponents/global.scss";

//redux
import { useDispatch } from "react-redux";
import { dispatchSetLanguageReadyState } from "./store/language/languageReadyState";
import { dispatchSetScreenWidth } from "./store/global/screenWidth";

//i18n
import "./i18n/i18n";
import { useTranslation } from "react-i18next";
import { setLanguage } from "./helpers/setLanguage";

//components
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

const App = () => {
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  //set screen width
  const screenResize = useCallback(() => {
    dispatch(dispatchSetScreenWidth(window.innerWidth));
  }, []);

  //set initial screen width
  useEffect(() => {
    dispatch(dispatchSetScreenWidth(window.innerWidth));
  }, []);

  $(window)
    .unbind("resize", screenResize)
    .on("resize orientationchange", screenResize);

  //inital set of language
  useEffect(() => {
    const supportedlanguages = ["zh", "en"];
    const getitem = window.localStorage.getItem("lng");

    if (getitem && supportedlanguages.includes(getitem)) {
      setLanguage(getitem, i18n);
      dispatch(dispatchSetLanguageReadyState(true));
    } else {
      //default language chinese
      setLanguage("zh", i18n);
      dispatch(dispatchSetLanguageReadyState(true));
    }
  }, []);

  //change the title on language change
  useEffect(() => {
    //initial
    document.title = t("pageTitle"); // 'pageTitle' should be a key in your translation files

    // Set up a listener for language change
    const handleLanguageChange = () => {
      document.title = t("pageTitle");
    };

    i18n.on("languageChanged", handleLanguageChange);

    // Cleanup the listener when the component is unmounted
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n, t]);

  return (
    <>
      <div className='index-container'>
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
      </div>
    </>
  );
};

export default App;
