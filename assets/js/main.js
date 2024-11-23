
$(document).ready(function(){
    $('#nav').onePageNav({
        currentClass: 'current',
    });
    
    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        }
      });
    /* counter up code */  
    $('.counter-incriment').counterUp({
        delay: 5,
        time: 1000
    }); 
    /* Slick slider */ 
    $('.testimonial').slick({
        // slidesToShow:2,
        dots: false,
        prevArrow: false,
        nextArrow: false
    });
});

$(window).on('scroll', function (){
    if($(window).scrollTop() > 500){
        $('.header_area').addClass('sticky');
    }else{
        $('.header_area').removeClass('sticky');
    }
});