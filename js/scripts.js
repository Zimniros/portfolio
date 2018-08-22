var navToogle = document.getElementById("toogle");
var header = document.getElementById("header");
var headerHeight = header.offsetHeight;

navToogle.addEventListener("click", function() {
  document.body.classList.toggle("nav-is-open");
});

window.addEventListener("scroll", function() {
  if (window.scrollY >= headerHeight) {
    document.body.classList.add("sticky-header");
  } else {
    document.body.classList.remove("sticky-header");
  }
});
