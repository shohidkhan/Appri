$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    
    if(scroll > 130){
        $('.top_menu').addClass('NavFiexd');
    }else{
         $('.top_menu').removeClass('NavFiexd');
    }
});






$(document).ready(function(){
    $('.venobox').venobox(); 
});


  arrows: false,
$('.counter').counterUp({
    delay: 10,
    time: 2000
});


  $('.testimonial-active').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
      dots: false,
  arrows:false,
  asNavFor: '.testimonial-img-active'
});
$('.testimonial-img-active').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.testimonial-active',
  dots: false,
  arrows:false,
  centerPadding:0,
    speed:800,
  autoplay:true,
  centerMode: true,
  focusOnSelect: true
});




$('.brand_active').slick({
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 1,
    autoplay:true,
    arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  
  ]
});