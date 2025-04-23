// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 700) {
//       $(".scroll-top-button").fadeIn();
//     } else {
//       $(".scroll-top-button").fadeOut();
//     }
//   });

//   $(function () {
//     $(document).scroll(function () {
//       var $nav = $(".navbar");
//       $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//     });
//   });

//   $(".scroll-top-button").on("click", function () {
//     $("html , body").animate(
//       {
//         scrollTop: 0,
//       },
//       100
//     );
//   });

//   $(".hamburger").click(function () {
//     $(".hamburger").toggleClass("active");
//     $(".navbar-nav").toggleClass("active-nav");
//     $("body").toggleClass("overflowNone");
//   });

// });

const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("mainContent");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-closed");
  mainContent.classList.toggle("expanded");
});
