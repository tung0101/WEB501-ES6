showbanner();
showproductstrend();
function showbanner() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var lootbanner = JSON.parse(xhttp.responseText);
      var banner = "";
      var spanbanner = "";
      for(var i=0; i<lootbanner.length; i++) {
        spanbanner += `<li data-target="#header-carousel" data-slide-to="${lootbanner[i]["id"]}"  class="${lootbanner[i]["active"]}"></li>`
      };
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
      document.getElementById("spanbanner").innerHTML = spanbanner;
    }

  };
  xhttp.open("GET", "json/banner.json", true);
  xhttp.send();
};


function showproductstrend() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var ketquadocfiletrend = JSON.parse(xhttp.responseText);
      var ketquadocfiletrendtang = ketquadocfiletrend.sort((a, b) => (a.luotban < b.luotban) ? 1 : -1);
      var kqtrend = "";
      // kqtrend = ketquadocfiletrend.map(itemtrend => {
      //   return `<div class="col-md-6 col-lg-4 col-xl-3">
      //   <div class="card text-center card-product">
      //     <div class="card-product__img">
      //       <img class="card-img" src="img/product/${itemtrend.image}" alt="">
      //       <ul class="card-product__imgOverlay">
      //         <li><button><i class="ti-search"></i></button></li>
      //         <li><button><i class="ti-shopping-cart"></i></button></li>
      //         <li><button><i class="ti-heart"></i></button></li>
      //       </ul>
      //     </div>
      //     <div class="card-body">
      //       <p>Kids Toy</p>
      //       <h4 class="card-product__title"><a href="#">${itemtrend.name}</a></h4>
      //       <p class="card-product__price">${itemtrend.gia}</p>
      //     </div>
      //   </div>
      // </div>`;
      // });
      for (i = 0; i < 8; i++) {
        
        kqtrend += `<div class="col-md-6 col-lg-4 col-xl-3">
          <div class="card text-center card-product">
            <div class="card-product__img">
              <img class="card-img" src="img/product/${ketquadocfiletrendtang[i]["hinh"]}" alt="">
              <ul class="card-product__imgOverlay">
                <li><button><i class="ti-search"></i></button></li>
                <li><button><i class="ti-shopping-cart"></i></button></li>
                <li><button><i class="ti-heart"></i></button></li>
              </ul>
            </div>
            <div class="card-body">
              <p>Kids Toy</p>
              <h4 class="card-product__title"><a href="#">${ketquadocfiletrendtang[i]["name"]}</a></h4>
              <p class="card-product__price">Giá: ${ketquadocfiletrendtang[i]["gia"]}</p>
              <p class="card-product__price">Lượt bán: ${ketquadocfiletrendtang[i]["luotban"]}</p>
            </div>
          </div>
        </div>`;
      }
      
      document.getElementById("listitemstrend").innerHTML = kqtrend;
    }
  };
  xhttp.open("GET", "json/listproduct.json", true);
  xhttp.send();
};