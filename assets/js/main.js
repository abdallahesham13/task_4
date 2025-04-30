document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger-menu");
  const navbarLinks = document.getElementById("navbar-links");

  hamburger.addEventListener("click", function () {
    navbarLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('toggleBtn');

  if (sidebar && toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('sidebar-closed');
    });
  }
});

