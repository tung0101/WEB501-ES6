showbanner();
function showbanner() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var lootbanner = JSON.parse(xhttp.responseText);
      var banner = "";
      banner = lootbanner.map(itembanner => {
        return `         <div class="carousel-item ${itembanner.active}">
        <img class="first-slide" src="images/${itembanner.image}" alt="First slide">
     </div>`;
      });
      document.getElementById("banner").innerHTML = banner.join('');
    }
  };
  xhttp.open("GET", "json/baner.json", true);
  xhttp.send();
};

showblog();
function showblog() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var lootbanner = JSON.parse(xhttp.responseText);
      var blog = "";
      blog = lootbanner.map(itembanner => {
        return `     
     <div class="col-md-4">
           <div class="blog_box">
              <div class="blog_img">
                 <figure><img src="images/${itembanner.hinh}" alt="#"/></figure>
              </div>
              <div class="blog_room">
                 <h3>${itembanner.name}</h3>
                 <span>${itembanner.tile}</span>
                 <p>${itembanner.note} </p>
              </div>
           </div>
        </div>`;
      });
      document.getElementById("row").innerHTML = blog.join('');
    }
  };
  xhttp.open("GET", "json/blog.json", true);
  xhttp.send();
};
// blog();
// function blog() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       var ketquadocfile = JSON.parse(xhttp.responseText);
//       var kq = "";
//       for (i = 0; i < 3; i++) {
//         kq += `
//         <div class="col-md-4">
//            <div class="blog_box">
//               <div class="blog_img">
//                  <figure><img src="images/${ketquadocfile[i]["hinh"]}" alt="#"/></figure>
//               </div>
//               <div class="blog_room">
//                  <h3>${ketquadocfile[i]["name"]}</h3>
//                  <span>${ketquadocfile[i]["tile"]}</span>
//                  <p>${ketquadocfile[i]["note"]} </p>
//               </div>
//            </div>
//         </div>`;
//       }
//       document.getElementById("row").innerHTML = kq;
//     }
//   };
//   xhttp.open("GET", "json/blog.json", true);
//   xhttp.send();
// };
showgall();
function showgall() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var ketquadocfile2 = JSON.parse(xhttp.responseText);
      var gall = "";
      gall = ketquadocfile2.map(item2 => {
        return `<div class="col-md-3 col-sm-6">
        <div class="gallery_img">
           <figure><img src="images/${item2.hinh}" alt="#"/></figure>
        </div>
     </div>`;
      });
      // var i = 0;
      // console.log(ketquadocfile2[0]);
      // for(i=0 ;i<6; i++){
      //     kq2 += `<option value="${i}">${ketquadocfile2[i]["name"]}</option>`;
      // }
      document.getElementById("gall").innerHTML = gall.join(" ");
    }
  };
  xhttp.open("GET", "json/gallery.json", true);
  xhttp.send();
};
showrooms();
function showrooms() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var ketquadocfile2 = JSON.parse(xhttp.responseText);
      var kq1 = "";
      kq1 = ketquadocfile2.map(item2 => {
        return `
     <div class="col-md-4 col-sm-6">
                  <div id="serv_hover"  class="room">
                     <div class="room_img">
                        <figure><img src="images/${item2.hinh}" alt="#"/></figure>
                     </div>
                     <div class="bed_room">
                        <h3>${item2.name}</h3>
                        <p>${item2.note} </p>
                     </div>
                  </div>
               </div>`;
      });
      document.getElementById("rom").innerHTML = kq1.join(" ");
    }
  };
  xhttp.open("GET", "json/room.json", true);
  xhttp.send();
};

function kiemtra() {
  let loi = " ";
  let check = true;
  // kiểm tra họ tên
  var hoten = document.getElementById("name");
  if (hoten.value == "") {
    hoten.className = "loi";
    document.getElementById("ht").innerHTML = "Họ và tên không được bỏ trống <br>";
    check = false;
  } else if (hoten.value.length > 30) {
    hoten.className = "loi";
    document.getElementById("ht").innerHTML = "Họ tên quá dài <br>";
    check = false;
  } else {
    hoten.className = "txt";
    document.getElementById("ht").innerHTML = " ";
  }
  // kiểm tra email
  var mail = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
  var email = document.getElementById("email").value;
  var em = document.getElementById("email");
  if (em.value == "") {
    em.className = "loi";
    document.getElementById("em").innerHTML = "Email không được bỏ trống";
  } else if (mail.test(email)) {
    email.className = "txt";
    document.getElementById("em").innerHTML = " ";
  } else {
    email.className = "loi";
    document.getElementById("em").innerHTML = "Email không hợp lệ";
  }
  // kiểm tra số
  var hoten = document.getElementById("phone");
  if (hoten.value == "") {
    hoten.className = "loi";
    document.getElementById("ph").innerHTML = "số điện thoại không được bỏ trống <br>";
    check = false;
  } else if (hoten.value.length > 10) {
    hoten.className = "loi";
    document.getElementById("ph").innerHTML = "số điện thoại quá dài <br>";
    check = false;
  } else {
    hoten.className = "txt";
    document.getElementById("ph").innerHTML = " ";
  }
  // Kiểm tra ghi chú
  var gc = document.getElementById('mess');
  if (gc.value == "") {
    gc.className = "loi";
    document.getElementById("gc").innerHTML = "Message không được bỏ trống <br>";
    check = false;
  } else if (gc.value.length > 200) {
    gc.className = "loi";
    document.getElementById("gc").innerHTML = "Message phải dưới 200 kí tự <br>";
    check = false;
  } else {
    gc.className = "txt";
    document.getElementById("gc").innerHTML = " ";
  }
  if (check == true) {
    alert("Xin chúc mừng bạn đã đăng ký thành công");
  }
  return check;
}