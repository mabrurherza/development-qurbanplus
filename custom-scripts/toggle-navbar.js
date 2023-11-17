const NavList = document.querySelector(".nav-list");
const navtoggler = document.getElementById("NavToggler");

const  hamburger = document.querySelector(".hamburger")

navtoggler.addEventListener("click", function () {
  NavList.classList.toggle("show")
  hamburger.classList.toggle("hidden")
});

