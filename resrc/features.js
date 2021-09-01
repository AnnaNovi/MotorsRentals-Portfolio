var swiper = new Swiper(".reviews__swiper", {
  centeredSlides: true,
  slidesPerView: 2,
  speed: 1000,
  loop: true,
  spaceBetween: 80,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' + '<span class="swiper-pagination-between"></span>' + '<span class="' + totalClass + '"></span>';
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});