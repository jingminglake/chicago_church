import React, { useCallback, useState } from "react";

import { useTranslation } from "react-i18next";
import { setLanguage } from "../helpers/setLanguage";
import { clickout } from "../helpers/clickout";

const lng = {
  en: {
    name: "English",
    class: "fi fi-us",
    change: "en",
  },

  zh: {
    name: "中文",
    class: "fi fi-cn",
    change: "zh",
  },
};

const LanguageSelection = () => {
  const { i18n } = useTranslation();

  const [show, setShow] = useState(false);

  const c = useCallback(() => {
    clickout(
      [`nav-ls-selcon`, `nav-ls-parent`],
      `nav-ls-selcon`,
      setShow,
      false
    );
  }, []);

  $(document).unbind("click", c).click(c);

  return (
    <div className='nav-ls-parent' id='nav-ls-parent'>
      <div className='nav-ls-lng' onClick={() => setShow((prev) => !prev)}>
        <div className={lng[i18n.language].class}></div>
        <div className='nav-ls-tx'>{lng[i18n.language].name}</div>

        <i className='fas fa-angle-down fa-sm nav-ls-caret'></i>
      </div>

      {show && (
        <div
          className='nav-ls-selcon boxshadow'
          id='nav-ls-selcon'
          style={{
            top: Number($(".nav-ls-lng").outerHeight()) + 5 + "px",
          }}
        >
          {/* <div className='nav-ls-col'>
            <div className='nav-ls-fl'></div>
            <div className="ls-">English</div>
          </div> */}
          {Object.values(lng).map((t) => (
            <div
              className='nav-ls-col'
              onClick={() => {
                setLanguage(t.change, i18n);
                setShow(false);
              }}
            >
              <div className={t.class}></div>
              <div className='nav-ls-tx'>{t.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelection;
