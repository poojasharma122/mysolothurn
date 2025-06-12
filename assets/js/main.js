  // mobil
document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-icon");
  const nav = document.querySelector(".nav");
  const menuToggle = document.querySelector(".menu-toggle");

  if (searchIcon) {
      searchIcon.addEventListener("click", function () {
          nav.classList.toggle("search");
          nav.classList.toggle("no-search");
      });
  }

  if (menuToggle) {
      menuToggle.addEventListener("click", function () {
          nav.classList.toggle("mobile-nav");
          this.classList.toggle("is-active");
      });
  }
});


// slider
var swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,      // 3 seconds between slides
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

  