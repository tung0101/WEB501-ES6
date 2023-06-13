// const api = [
//     {
//         id: 1,
//         title: 'Hi- Tea Vải',
//         price: 49000,
//         url: 'https://product.hstatic.net/1000075078/product/1669736893_hi-tea-vai_86427bfa982f48188db23833b7196f2a_large.png',
//     },
//     {
//         id: 2,
//         title: 'Cà Phê Sữa Đá',
//         price: 29000,
//         url: 'https://product.hstatic.net/1000075078/product/1669736835_ca-phe-sua-da_ec94966a51e74a089779e4b761090321_large.png',
//     },
//     {
//         id: 3,
//         title: 'Bánh Mì VN Thịt Nguội',
//         price: 35000,
//         url: 'https://product.hstatic.net/1000075078/product/1638440015_banh-mi-vietnam_02c90a5912f84a45b303eb5036b6dcb7_large.jpg',
//     },
//     {
//         id: 4,
//         title: 'Mochi Kem Chocolate',
//         price: 19000,
//         url: 'https://product.hstatic.net/1000075078/product/1655348107_mochi-choco_6498979c562a466c91c61200bc86e96a_large.jpg',
//     },
// ]
// const banner = [
//     {
//         id: 1,
//         link: 'https://file.hstatic.net/1000075078/file/combo89_desktop_fb9f6ae2a13a4068a4a2a84d50f21fe3.jpg',
//     },
//     {
//         id: 2,
//         link: 'https://file.hstatic.net/1000075078/file/keothom_desktop_f354fb777cea4ff4be3053f786c76d13.jpg',
//     },
//     {
//         id: 3,
//         link: 'https://file.hstatic.net/1000075078/file/banh_50_desktop_1c80f2c10ad94cedb07f8a0470966f75.jpg',
//     },
//     {
//         id: 4,
//         link: 'https://file.hstatic.net/1000075078/file/keothom_desktop_93b49bbc56e54a60a645a47beac25399.jpg',
//     },
// ];
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

fetch("./api.json")
  .then((res) => res.json())
  .then((products) => {
    products.sort((a, b) => a - b);
    const html_product = products
      .map((item) => {
        return ` <div class="col-3">
        <img src="${item.url}" alt="">
        <h1 class="item__title fs-5 mt-1">Hi- Tea Vải</h1>
        <p class="item__des fs-6">${new Intl.NumberFormat().format(
          item.price
        )} đ</p>
    </div>`;
      })
      .join("");
    products__container.innerHTML = html_product;
  });
