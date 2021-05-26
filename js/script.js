$(document).ready(function () {
   $('.burger-menu, .header__burger').click(function (event) {
      $('.header__bottom').toggleClass('_active');
      $('body').toggleClass('lock');
   });
   const swiper = new Swiper('.swiper-container', {
      
      spaceBetween: 30,
      navigation: {
         nextEl: '.swiper-next',
         prevEl: '.swiper-prev',
      },
      breakpoints: {
         // when window width is >= 320px
         100: {
            slidesPerView: 1
         },
         // when window width is >= 480px
         750: {
            slidesPerView:2
         },
         // when window width is >= 640px
         1100: {
            slidesPerView:3
         }
      }
   });
});