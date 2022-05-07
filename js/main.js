const navList = document.querySelector(".nav__list");
const navToggelBtn = document.querySelector(".toggel__btn");
const navbar = document.querySelector(".nav__logo");

navToggelBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
  navbar.classList.toggle("open");
});

// swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    // nextEl: ".hossam",
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
