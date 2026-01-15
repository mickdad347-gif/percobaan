//toggle
const navbarNav = document.querySelector(".navbar-nav");
//klik menu
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
//klik penghilang menu
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
