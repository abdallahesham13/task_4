document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger-menu");
  const navbarLinks = document.getElementById("navbar-links");

  hamburger.addEventListener("click", function () {
    navbarLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});

const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("mainContent");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-closed");
  mainContent.classList.toggle("expanded");
});
