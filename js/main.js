$(document).ready(function(){
    $('.individual-fillihg__slider-items').slick({
      arrows: true,
      adaptive: true,
    //   responsive: [
    //     {
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //         }
    //     }
    // ]
    });

    $(" .individual-fillihg__slider-items").on('afterChange', function(event, slick, currentSlide){
      $(".individual-fillihg__slider-total").text(currentSlide + 1);
   });
   $(" .individual-decor__slider-inner").on('afterChange', function(event, slick, currentSlide){
    $(".individual-decor__slider-total").text(currentSlide + 1);
  });
  $(" .reviews__slider-inner").on('afterChange', function(event, slick, currentSlide){
    $(".individual-decor__slider-total").text(currentSlide + 1);
  });

   $('.individual-decor__slider-inner').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    adaptive: true,
    prevArrow: '    <button class="slick-arrow slick-prev"><img src="/images/arrow-prev.svg"></button>',
    nextArrow: '    <button class="slick-arrow slick-next"><img src="/images/arrow-next.svg"></button>', 
  
  });

  $('.reviews__slider-inner').slick({
    arrows: true,
    adaptive: true,
    prevArrow: '    <button class="slick-arrow slick-prev"><img src="/images/arrow-prev.svg"></button>',
    nextArrow: '    <button class="slick-arrow slick-next"><img src="/images/arrow-next.svg"></button>', 
  });
  $(".reviews__slider-expand").click(function(){
    $(".reviews__slider-reviews").hide();
    $(".reviews-hide__slider").show();
});
$(".reviews__slider-hide").click(function(){
    $(".reviews-hide__slider").hide();
    $(".reviews__slider-reviews").show();
});

  });