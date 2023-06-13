(function ($) {
  "use strict";
  
  // Dropdown on mouse hover
  $(document).ready(function () {
      function toggleNavbarMethod() {
          if ($(window).width() > 992) {
              $('.navbar .dropdown').on('mouseover', function () {
                  $('.dropdown-toggle', this).trigger('click');
              }).on('mouseout', function () {
                  $('.dropdown-toggle', this).trigger('click').blur();
              });
          } else {
              $('.navbar .dropdown').off('mouseover').off('mouseout');
          }
      }
      toggleNavbarMethod();
      $(window).resize(toggleNavbarMethod);
  });
  
  
  // Back to top button
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });
  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });


  // Vendor carousel
  $('.vendor-carousel').owlCarousel({
      loop: true,
      margin: 29,
      nav: false,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
          0:{
              items:2
          },
          576:{
              items:3
          },
          768:{
              items:4
          },
          992:{
              items:5
          },
          1200:{
              items:6
          }
      }
  });


  // Related carousel
  $('.related-carousel').owlCarousel({
      loop: true,
      margin: 29,
      nav: false,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
          0:{
              items:1
          },
          576:{
              items:2
          },
          768:{
              items:3
          },
          992:{
              items:4
          }
      }
  });


  // Product Quantity
  $('.quantity button').on('click', function () {
      var button = $(this);
      var oldValue = button.parent().parent().find('input').val();
      if (button.hasClass('btn-plus')) {
          var newVal = parseFloat(oldValue) + 1;
      } else {
          if (oldValue > 0) {
              var newVal = parseFloat(oldValue) - 1;
          } else {
              newVal = 0;
          }
      }
      button.parent().parent().find('input').val(newVal);
  });
  
})(jQuery);


$(function() {
  "use strict";

  //------- Parallax -------//
  skrollr.init({
    forceHeight: false
  });

  //------- Active Nice Select --------//
  $('select').niceSelect();

  //------- hero carousel -------//
  $(".hero-carousel").owlCarousel({
    items:3,
    margin: 10,
    autoplay:false,
    autoplayTimeout: 5000,
    loop:true,
    nav:false,
    dots:false,
    responsive:{
      0:{
        items:1
      },
      600:{
        items: 2
      },
      810:{
        items:3
      }
    }
  });

  //------- Best Seller Carousel -------//
  if($('.owl-carousel').length > 0){
    $('#bestSellerCarousel').owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      navText: ["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],
      dots: false,
      responsive:{
        0:{
          items:1
        },
        600:{
          items: 2
        },
        900:{
          items:3
        },
        1130:{
          items:4
        }
      }
    })
  }

  //------- single product area carousel -------//
  $(".s_Product_carousel").owlCarousel({
    items:1,
    autoplay:false,
    autoplayTimeout: 5000,
    loop:true,
    nav:false,
    dots:false
  });

  //------- mailchimp --------//  
	function mailChimp() {
		$('#mc_embed_signup').find('form').ajaxChimp();
	}
  mailChimp();
  
  //------- fixed navbar --------//  
  $(window).scroll(function(){
    var sticky = $('.header_area'),
    scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  //------- Price Range slider -------//
  if(document.getElementById("price-range")){
  
    var nonLinearSlider = document.getElementById('price-range');
    
    noUiSlider.create(nonLinearSlider, {
        connect: true,
        behaviour: 'tap',
        start: [ 500, 4000 ],
        range: {
            // Starting at 500, step the value by 500,
            // until 4000 is reached. From there, step by 1000.
            'min': [ 0 ],
            '10%': [ 500, 500 ],
            '50%': [ 4000, 1000 ],
            'max': [ 10000 ]
        }
    });
  
  
    var nodes = [
        document.getElementById('lower-value'), // 0
        document.getElementById('upper-value')  // 1
    ];
  
    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    nonLinearSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
        nodes[handle].innerHTML = values[handle];
    });
  
  }
  
});


