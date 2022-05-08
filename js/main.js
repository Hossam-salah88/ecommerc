const navList = document.querySelector(".nav__list");
const navToggelBtn = document.querySelector(".toggel__btn");
const navLogo = document.querySelector(".nav__logo");
const navbar = document.querySelector(".nav");

//========== toggel butten =================

navToggelBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
  navLogo.classList.toggle("open");
});

//=================== shadow on scroll ===================
function scrollHeader() {
  const scrollY = window.pageYOffset;
  if (this.scrollY >= 80) {
    navbar.classList.add("nav__scroll");
  } else {
    navbar.classList.remove("nav__scroll");
  }
}
window.addEventListener("scroll", scrollHeader);

//==================== swiper js ====================
//================ hero Section =============
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    // nextEl: ".hossam",
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ================ Special Section ================
var swiper = new Swiper(".special__mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".special__swiper-pagination",
    clickable: true,
  },
});
