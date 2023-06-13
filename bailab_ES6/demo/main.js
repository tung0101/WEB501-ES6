showbanner();
getdatatodm();
function getdatatodm() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      //document.getElementById("demo").innerHTML = xhttp.responseText;
      var ketquadocfile = JSON.parse(xhttp.responseText);

      var kq = "";
      for (i = 0; i < 4; i++) {
        kq += `
        <div class="sp">
<img src="img/${ketquadocfile[i]["hinh"]}" alt="" style="height: 300px; width: 300px;" />
<h3>${ketquadocfile[i]["ten"]}</h3>
<h5>${ketquadocfile[i]["gia"]}</h5>
</div>
`;
      }

      document.getElementById("bestsl").innerHTML = kq;
    }
  };
  xhttp.open("GET", "main.json", true);
  xhttp.send();
}
// const products__container = document.querySelector(".products");
function showbanner() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var lootbanner = JSON.parse(xhttp.responseText);
      var anh = "";
      // anh = lootbanner.map(itembanner => {
      //   return `<img src="img/${itembanner.image}" alt="" style="width: 350px; height: 250px" />`;
      // });
      for (i = 0; i < 4; i++) {
        anh += `<img src="img/${lootbanner[i]["image"]}" alt="" style="width: 350px; height: 250px" />`;
      }
      document.getElementById("anh").innerHTML = anh;
    }
  };
  xhttp.open("GET", "hinh.json", true);
  xhttp.send();
}
const mainBanner = document.querySelector(".banner");
const silder__container = document.querySelector(".silder__container");
const products__container = document.querySelector(".products");
const banner__left = document.querySelector(".banner__left");
const banner__right = document.querySelector(".banner__right");
const silder__container__btns = document.querySelector(
  ".silder__container--btns"
);
fetch("./banner.json")
  .then((res) => res.json())
  .then((banners) => {
    let indexSlider = 0;
    let HTML__button__panination = "";
    const time = 2000;
    const html_slider = banners
      .map((item, index) => {
        HTML__button__panination += `<div class="sider__btn"></div>`;
        return `<div class="item col-6"><img  src="${item.link}" alt="${item.id}"/></div>`;
      })
      .join("");

    silder__container.innerHTML = html_slider;
    silder__container__btns.innerHTML = HTML__button__panination;
    const list__button__silider = document.querySelectorAll(".sider__btn");

    const sliders = {
      set() {
        list__button__silider.forEach((banner) =>
          banner.classList.remove("active")
        );
        mainBanner.setAttribute("src", banners[indexSlider].link);
        list__button__silider[indexSlider].classList.add("active");
      },
    };
    sliders.set();

    const nextSlider = () => {
      indexSlider++;
      if (indexSlider >= banners.length) {
        indexSlider = 0;
      }
      sliders.set();
    };
    const backSlider = () => {
      indexSlider--;
      if (indexSlider < 0) {
        indexSlider = banners.length - 1;
      }
      sliders.set();
    };

    // creat id Loop life cycle
    let idSlider = setInterval(nextSlider, time);

    // Left or right Slider Banner button
    banner__left.onclick = () => {
      clearInterval(idSlider);
      backSlider();
      idSlider = setInterval(nextSlider, time);
    };
    banner__right.onclick = () => {
      clearInterval(idSlider);
      nextSlider();
      idSlider = setInterval(nextSlider, time);
    };

    // change main banner when click button at list button position

    for (const index in list__button__silider) {
      list__button__silider[index].onclick = () => {
        changeSlider(index);
      };
    }
    const changeSlider = (index) => {
      clearInterval(idSlider);
      indexSlider = index;
      sliders.set();
      idSlider = setInterval(nextSlider, time);
    };
  });

fetch("./main.json")
  .then((res) => res.json())
  .then((products) => {
    products.sort((a, b) => a - b);
    const html_product = products
      .map((item) => {
        return ` 
        <div class="sp">
          <img src="img/${item.hinh}" alt="" style="height: 300px; width: 300px;" />
          <h3>${item.ten}</h3>
          <h5>${( item.gia
          )}đ</h5>`;
      })
      .join("");
    products__container.innerHTML = html_product;
  });
