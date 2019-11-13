document.addEventListener("scroll", e => {
  sessionStorage.setItem("yLocation", window.pageYOffset);
});

window.addEventListener("load", e => {
  let a = sessionStorage.getItem("yLocation");
  window.scrollTo(0, a);
});
