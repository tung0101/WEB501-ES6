(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Fixed Navbar
  $(window).scroll(function () {
    if ($(window).width() < 992) {
      if ($(this).scrollTop() > 45) {
        $(".fixed-top").addClass("bg-white shadow");
      } else {
        $(".fixed-top").removeClass("bg-white shadow");
      }
    } else {
      if ($(this).scrollTop() > 45) {
        $(".fixed-top").addClass("bg-white shadow").css("top", -45);
      } else {
        $(".fixed-top").removeClass("bg-white shadow").css("top", 0);
      }
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);

// json
getdatatodm();
function getdatatodm() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      //document.getElementById("demo").innerHTML = xhttp.responseText;
      var ketquadocfile = JSON.parse(xhttp.responseText);

      var kq = "";
      for (i = 0; i < 8; i++) {
        kq += ` <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="product-item">
              <div class="position-relative bg-light overflow-hidden">
                  <img class="img-fluid w-100" src="img/${ketquadocfile[i]["hinh"]}" alt="">
                  <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
              </div>
              <div class="text-center p-4">
                  <a class="d-block h5 mb-2" href="">${ketquadocfile[i]["ten"]}</a>
                  <span class="text-primary me-1">${ketquadocfile[i]["gia"]}</span>
                  <span class="text-body text-decoration-line-through">${ketquadocfile[i]["giagoc"]}</span>
              </div>
              <div class="d-flex border-top">
                  <small class="w-50 text-center border-end py-2">
                      <a class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</a>
                  </small>
                  <small class="w-50 text-center py-2">
                      <a class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                  </small>
              </div>
          </div>
      </div>`;
      }

      document.getElementById("pro1").innerHTML = kq;
      document.getElementById("pro2").innerHTML = kq;
      document.getElementById("pro3").innerHTML = kq;
    }
  };
  xhttp.open("GET", "json/product.json", true);
  xhttp.send();
}
showbanner();
function showbanner() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var lootbanner = JSON.parse(xhttp.responseText);
      var banner = "";
      banner = lootbanner.map((itembanner) => {
        return `
            <div class="carousel-item position-relative ${itembanner.active}">
            <img class="w-100" src="img/${itembanner.image}" alt="Image">
            <div class="carousel-caption">
                <div class="container">
                    <div class="row justify-content-start">
                        <div class="col-lg-7">
                            <h1 class="display-2 mb-5 animated slideInDown">${itembanner.name}</h1>
                            <a href="" class="btn btn-primary rounded-pill py-sm-3 px-sm-5">Products</a>
                            <a href="" class="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Services</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
      });
      document.getElementById("show").innerHTML = banner.join("");
    }
  };
  xhttp.open("GET", "json/banner.json", true);
  xhttp.send();
}
showFeatures();
function showFeatures() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var lootbanner = JSON.parse(xhttp.responseText);
      var banner = "";
      banner = lootbanner.map((itemanh) => {
        return `
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="bg-white text-center h-100 p-4 p-xl-5">
            <img class="img-fluid mb-4" src="img/${itemanh.image}" alt="">
            <h4 class="mb-3">${itemanh.name}</h4>
            <p class="mb-4">${itemanh.conten}</p>
            <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
        </div>
    </div>`;
      });
      document.getElementById("a1").innerHTML = banner.join("");
    }
  };
  xhttp.open("GET", "json/featurer.json", true);
  xhttp.send();
}


// fetch('https://63e5240c4474903105fa7a16.mockapi.io/demo')
// .then((res) => { 
//     console.log(res.status); // 404
//     return res.json();
// })
// .then(data => console.log('Success:', data))
// .catch(error => console.log('Error:', error));
var gia1 =  document.getElementById("gia1");
var gia2 =  document.getElementById("gia2");
var gia3 =  document.getElementById("gia3");
// const tong = gia1 + gia2 + gia3;
// export {tong};