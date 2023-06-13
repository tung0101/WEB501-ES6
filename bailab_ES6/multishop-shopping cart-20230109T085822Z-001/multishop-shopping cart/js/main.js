showproducts();
showproductstrend()
function showproductstrend() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var ketquadocfiletrend = JSON.parse(xhttp.responseText);
        var ketquadocfiletrendtang = ketquadocfiletrend.sort((a, b) => (a.luotban < b.luotban) ? 1 : -1);
        console.log(ketquadocfiletrendtang);
        var kqtrend = ""; 
        for (i = 0; i < 8; i++) {
          
          kqtrend += `         <div class="col-lg-4 col-md-6 col-sm-6 pb-1">
          <div class="product-item bg-light mb-4">
              <div class="product-img position-relative overflow-hidden">
                  <img class="img-fluid w-100" src="img/${ketquadocfiletrend[i]["hinh"]}" alt="">
                  <div class="product-action">
                      <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
                      <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                      <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                      <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                  </div>
              </div>
              <div class="text-center py-4">
                  <a class="h6 text-decoration-none text-truncate" href="">${ketquadocfiletrend[i]["name"]}</a>
                  <div class="d-flex align-items-center justify-content-center mt-2">
                      <h5>$${ketquadocfiletrend[i]["gia"]}</h5><h6 class="text-muted ml-2"><del>$${ketquadocfiletrend[i]["gia"]}</del></h6>
                  </div>
                  <div class="d-flex align-items-center justify-content-center mb-1">
                      <small class="fa fa-star text-primary mr-1"></small>
                      <small class="fa fa-star text-primary mr-1"></small>
                      <small class="fa fa-star text-primary mr-1"></small>
                      <small class="fa fa-star text-primary mr-1"></small>
                      <small class="fa fa-star text-primary mr-1"></small>
                      <small>(99)</small>
                  </div>
              </div>
          </div>
      </div>`;
        }
        
        document.getElementById("listitemstrend").innerHTML = kqtrend;
      }
    };
    xhttp.open("GET", "json/show.json", true);
    xhttp.send();
  };
function showproducts() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var ketquadocfile = JSON.parse(xhttp.responseText);
        var kq = "";
        // kq = ketquadocfile.map(item => {
        //   return `<div class="col-md-6 col-lg-4">
        //       <div class="card text-center card-product">
        //       <div class="card-product__img">
        //           <img class="card-img" src="img/product/${item.hinh}" alt="">
        //           <ul class="card-product__imgOverlay">
        //           <li><button><i class="ti-search"></i></button></li>
        //           <li><button><i class="ti-shopping-cart"></i></button></li>
        //           <li><button><i class="ti-heart"></i></button></li>
        //           </ul>
        //       </div>
        //       <div class="card-body">
        //           <p>Accessories</p>
        //           <h4 class="card-product__title"><a href="#">${item.name}</a></h4>
        //           <p class="card-product__price">$${item.gia}</p>
        //       </div>
        //       </div>
        //   </div>`;
        // });
        for (i = 0; i < 6; i++) {
          kq += `    <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
          <a class="text-decoration-none" href="">
              <div class="cat-item d-flex align-items-center mb-4">
                  <div class="overflow-hidden" style="width: 100px; height: 100px;">
                      <img class="img-fluid" src="img/${ketquadocfile[i]["hinh"]}" alt="">
                  </div>
                  <div class="flex-fill pl-3">
                      <h6>${ketquadocfile[i]["name"]}</h6>
                      <small class="text-body">$${ketquadocfile[i]["gia"]}</small>
                  </div>
              </div>
          </a>
      </div>`;
        }
        document.getElementById("listitems").innerHTML = kq;
      }
    };
    xhttp.open("GET", "json/show.json", true);
    xhttp.send();
  };
showbanner()
  function showbanner() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var lootbanner = JSON.parse(xhttp.responseText);
        var banner = "";
        banner = lootbanner.map(itembanner => {
          return `<div class="carousel-item position-relative ${itembanner.active}" style="height: 430px;">
              <img class="position-absolute w-100 h-100" src="img/${itembanner.image}" style="object-fit: cover;">
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style="max-width: 700px;">
                  <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown">${itembanner.name}</h1>
                  <p class="mx-md-5 px-5 animate__animated animate__bounceIn">${itembanner.content}</p>
                  <a class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop
                    Now</a>
                </div>
              </div>
            </div>`;
        });
        document.getElementById("banner").innerHTML = banner.join('');
  
      }
  
    };
    xhttp.open("GET", "json/banner.json", true);
    xhttp.send();
  };


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

