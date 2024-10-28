
// preloder
$(window).on('load',function(){
  $('.preeloder').delay(300).fadeOut(500);
})
// preloder


// back tot top

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if(scrolling > 100){
    $('.backtotop').fadeIn(1000)
  }else{
    $('.backtotop').fadeOut(1000)
  }
})

$('.backtotop').click(function(){
   $('html, body').animate({
    scrollTop: 0,
   });
});



// back tot top



// slider testi
$('.testi_slick').slick({
  autoplay:true,
  delay: 300,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});
// slider testi