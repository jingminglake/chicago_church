function setLanguage(lng, i18n) {
  i18n.changeLanguage(lng);
  window.localStorage.setItem("lng", lng);
}

export { setLanguage };
