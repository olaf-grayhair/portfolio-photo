
/*---------SLICK-SLIDER------------*/
$(function(){
    $('.slider').slick({
      dotsClass:'header-dots',
      autoplay: true,
      autoplaySpeed: 5000,
      // vertical:true,
      infinite: true,
      arrows:false,
      dots:true,
    })
})
/*---------SLICK-SLIDER------------*/
/*---------BURGER------------*/
$(".menu-burger").click(function(){
  $(".menu-burger,.mobile-menu").toggleClass("active");
      $('html').toggleClass('no-scroll');
});


/*---------POPUP------------*/
$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
  });
  
  $('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
  });
  $('.popup-bg').click(function (e) {
    if (!$(e.target).closest(".popup-inner").length) {
      $('.popup-bg').fadeOut(600);
    }
  });
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.popup-bg').fadeOut();
    }
  });
/*---------POPUP------------*/

/*---------fixed-------------*/
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})
/*---------fixed-------------*/

/*---------hide-------------*/
$(".photostudia-collum__link-row").click(function(event){
  $(this).next().slideToggle(500);
  $('.link-open__span', this).toggleClass('active')
})
/*---------hide-------------*/



