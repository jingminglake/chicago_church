function disableScroll() {
  $("html").css("overflow-y", "hidden");
}

function enableScroll() {
  $("html").css("overflow-y", "unset");
}

export { enableScroll, disableScroll };
