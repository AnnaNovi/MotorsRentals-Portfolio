//block reviews (index page)
document.addEventListener( "DOMContentLoaded", function(){ 
  let indexPage = document.getElementById("reviews"); 
  !! indexPage
  let swiper = new Swiper(".reviews__swiper", {
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
});

//switch excursion blocks (excur page)
document.addEventListener( "DOMContentLoaded", function(){ 
  let excurPage = document.getElementById("choose-excur"); 
  !!excurPage 
  let contentR = document.getElementById("rental-block")
  let contentE = document.getElementById("excur-block")
  let showR = document.getElementById("btn-rental")
  let showE = document.getElementById("btn-excur")

  showR.addEventListener("click", () => {
      contentR.style.display = "block";
      contentE.style.display = "none";
      showR.classList.add('active');
      showE.classList.remove('active');
  })
  showE.addEventListener("click", () => {
      contentE.style.display = "block";
      contentR.style.display = "none";
      showE.classList.add('active');
      showR.classList.remove('active');
  })
});

//switch excursion blocks (excur page)
document.addEventListener( "DOMContentLoaded", function(){ 
  let faqPage = document.getElementById("faq"); 
  !!faqPage 
  var arrowOB = document.getElementById("openAnsw")

  arrowOB.addEventListener("click", () => {
      var qaOB = arrowOB.closest('.qa-line');
      var answOB = qaOB.lastChild;
      answOB.style.display = "block";
  })
});

//image gallery (gallery page)
document.addEventListener( "DOMContentLoaded", function(){ 
  let galleryPage = document.getElementById("gallery"); 
  !!galleryPage 
  Fancybox.bind(".gallery-line img", {
    Toolbar: {
      display: "close",
    },
    Thumbs: {
      autoStart: "false",
    },
  });
});




