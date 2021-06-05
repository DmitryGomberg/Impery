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
            slidesPerView: 2
         },
         // when window width is >= 640px
         1100: {
            slidesPerView: 3
         }
      }
   });
   $(function () {
      $('.only-one').on('click', function () {
         $('.only-one').not(this).prop('checked', false);
      });
   });

   $('.select').on('click', '.select__head', function () {
      if ($(this).hasClass('open')) {
         $(this).removeClass('open');
         $(this).next().fadeOut();
      } else {
         $('.select__head').removeClass('open');
         $('.select__list').fadeOut();
         $(this).addClass('open');
         $(this).next().fadeIn();
      }
   });

   $('.select').on('click', '.select__item', function () {
      $('.select__head').removeClass('open');
      $(this).parent().fadeOut();
      $(this).parent().prev().text($(this).text());
      $(this).parent().prev().prev().val($(this).text());
   });

   $(document).click(function (e) {
      if (!$(e.target).closest('.select').length) {
         $('.select__head').removeClass('open');
         $('.select__list').fadeOut();
      }
   });
   $('.preloader, .overlay').fadeOut();

   $('.menu-item-has-children1').click(function (e) {
      $('.menu-item-has-children1').next().toggleClass('visible');
      $('.buring-prev1').toggleClass('arrow-anim');
      e.preventDefault();
   });
    $('.menu-item-has-children2').click(function (e) {
      $('.menu-item-has-children2').next().toggleClass('visible');
      $('.buring-prev2').toggleClass('arrow-anim');
      e.preventDefault();
   });
     $('.menu-item-has-children3').click(function (e) {
      $('.menu-item-has-children3').next().toggleClass('visible');
      $('.buring-prev3').toggleClass('arrow-anim');
      e.preventDefault();
   });
      $('.menu-item-has-children4').click(function (e) {
      $('.menu-item-has-children4').next().toggleClass('visible');
      $('.buring-prev4').toggleClass('arrow-anim');
      e.preventDefault();
   });
       $('.menu-item-has-children5').click(function (e) {
      $('.menu-item-has-children5').next().toggleClass('visible');
      $('.buring-prev5').toggleClass('arrow-anim');
      e.preventDefault();
   });
   $('.form-more').click(function (e) {
      $('.form__hidden, .form-more').toggleClass('active');
   });
   $('.tabs-wrapper').each(function () {
      let ths = $(this);
      ths.find('.tab-item').not(':first').hide();
      ths.find('.tab').click(function () {
         ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
         ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
      }).eq(0).addClass('active');
   });
});