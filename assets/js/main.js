
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
});

$(window).on('scroll', function (){
    if($(window).scrollTop() > 500){
        $('.header_area').addClass('sticky');
    }else{
        $('.header_area').removeClass('sticky');
    }
});