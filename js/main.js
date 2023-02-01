$(function(){
  $('.slider').slick({
    dots:true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/Arrow_left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/Arrow_right.svg" alt="arrow left"></button>',
  });

  $('.nav-btn, .menu a').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });
})






