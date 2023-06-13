showbanner();
showproducts();
showlistproducts();
showproductstrend();
getdatatodm();
function getdatatodm() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          //document.getElementById("demo").innerHTML = xhttp.responseText;
          var ketquadocfile = JSON.parse(xhttp.responseText);

          var kq = "";
          kq = ketquadocfile.map(item => {

              return `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                              <a class="text-decoration-none" href="">
                                  <div class="cat-item d-flex align-items-center mb-4">
                                      <div class="overflow-hidden" style="width: 100px; height: 100px;">
                                          <img class="img-fluid" src="img/${item.hinh}" alt="">
                                      </div>
                                      <div class="flex-fill pl-3">
                                          <h6>Category Name</h6>
                                          <small class="text-body">100 Products</small>
                                      </div>
                                  </div>
                              </a>
                          </div>`;
          });

          document.getElementById("loaddm2").innerHTML = kq.join('');
      }
  };
  xhttp.open("GET", "json/danhmuc.json", true);
  xhttp.send();
}
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

function showproducts() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var ketquadocfile = JSON.parse(xhttp.responseText);
      var kq = "";
      for (i = 0; i < 6; i++) {
        kq += `<div class="col-md-6 col-lg-4">
            <div class="card text-center card-product">
            <div class="card-product__img">
                <img class="card-img" src="img/product/${ketquadocfile[i]["hinh"]}" alt="">
                <ul class="card-product__imgOverlay">
                <li><button><i class="ti-search"></i></button></li>
                <li><button><i class="ti-shopping-cart"></i></button></li>
                <li><button><i class="ti-heart"></i></button></li>
                </ul>
            </div>
            <div class="card-body">
                <p>Accessories</p>
                <h4 class="card-product__title"><a href="#">${ketquadocfile[i]["name"]}</a></h4>
                <p class="card-product__price">$${ketquadocfile[i]["gia"]}</p>
            </div>
            </div>
        </div>
        `;
      }
      document.getElementById("listitems").innerHTML = kq;
    }
  };
  xhttp.open("GET", "json/listproduct.json", true);
  xhttp.send();
};

function showproductstrend() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var ketquadocfiletrend = JSON.parse(xhttp.responseText);
      var ketquadocfiletrendtang = ketquadocfiletrend.sort((a, b) => (a.luotban < b.luotban) ? 1 : -1);
      console.log(ketquadocfiletrendtang);
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
              <p class="card-product__price">${ketquadocfiletrendtang[i]["gia"]}</p>
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

function showlistproducts() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var ketquadocfile2 = JSON.parse(xhttp.responseText);
      var kq1 = "";
      kq1 = ketquadocfile2.map(item2 => {
        return `<option value="1">${item2.name}</option>`;
      });
      // var i = 0;
      // console.log(ketquadocfile2[0]);
      // for(i=0 ;i<6; i++){
      //     kq2 += `<option value="${i}">${ketquadocfile2[i]["name"]}</option>`;
      // }
      document.getElementById("list8").innerHTML = kq1.join(" ");
    }
  };
  xhttp.open("GET", "json/listproduct.json", true);
  xhttp.send();
};
const list = [
  { number: '4', size: 'XXL', color: 'black' },
  { number: '7', size: 'XL', color: 'blue' },
  { number: '1', size: 'M', color: 'red' }
];
var tangdan = list.sort((a, b) => (a.number > b.number) ? 1 : -1)
console.log(tangdan);
  