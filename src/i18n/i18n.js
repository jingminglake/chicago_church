import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

//components

import { en as home_en, zh as home_zh } from "./home/home-i18n";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "zh",
    lng: "zh",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          pageTitle: "The Church of the Chicagoans - Christian Faith",
          ...JSON.parse(home_en),
          //   ...JSON.parse(nav_en),
          //   ...JSON.parse(home_1_to_3_en),
          //   ...JSON.parse(home_3_to_6_en),
          //   ...JSON.parse(footer_en),
          //   ...JSON.parse(about_en),
          //   ...JSON.parse(contact_en),
          //   ...JSON.parse(notfound_en),
          //   ...JSON.parse(products_en),
          //   ...JSON.parse(admin_en),
          //   ...JSON.parse(global_en),
          //   ...JSON.parse(search_en),
          //   ...JSON.parse(photos_en),
        },
      },

      zh: {
        translation: {
          pageTitle: "芝加哥教会 - 基督教信仰",
          ...JSON.parse(home_zh),

          //   ...JSON.parse(nav_zh),
          //   ...JSON.parse(home_1_to_3_zh),
          //   ...JSON.parse(home_3_to_6_zh),
          //   ...JSON.parse(footer_zh),
          //   ...JSON.parse(about_zh),
          //   ...JSON.parse(contact_zh),
          //   ...JSON.parse(notfound_zh),
          //   ...JSON.parse(products_zh),
          //   ...JSON.parse(admin_zh),
          //   ...JSON.parse(global_zh),
          //   ...JSON.parse(search_zh),
          //   ...JSON.parse(photos_zh),
        },
      },
    },
  });

export default i18n;
