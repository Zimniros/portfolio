var navToogle = document.getElementById("toogle");

var header = document.getElementById("header");
var headerHeight = header.offsetHeight;

var navLinks = document.querySelectorAll("a.nav__link");
var navLinksElements = [].slice.call(navLinks);

navToogle.addEventListener("click", function() {
  document.body.classList.toggle("nav-is-open");
});

window.addEventListener("scroll", function() {
  if (window.pageYOffset >= headerHeight) {
    document.body.classList.add("sticky-header");
  } else {
    document.body.classList.remove("sticky-header");
  }
});

navLinksElements.forEach(function(link) {
  link.addEventListener("click", function() {
    document.body.classList.remove("nav-is-open");
  });
});

var scroll = new SmoothScroll('a[href*="#"]');
