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

blog();
function blog() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var ketquadocfile = JSON.parse(xhttp.responseText);
      var kq = "";
      for (i = 0; i < 3; i++) {
        kq += `
        <div class="col-md-4">
           <div class="blog_box">
              <div class="blog_img">
                 <figure><img src="images/${ketquadocfile[i]["hinh"]}" alt="#"/></figure>
              </div>
              <div class="blog_room">
                 <h3>${ketquadocfile[i]["name"]}</h3>
                 <span>${ketquadocfile[i]["tile"]}</span>
                 <p>${ketquadocfile[i]["note"]} </p>
              </div>
           </div>
        </div>`;
      }
      document.getElementById("row").innerHTML = kq;
    }
  };
  xhttp.open("GET", "json/blog.json", true);
  xhttp.send();
};
showgall();
function showgall() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var ketquadocfile2 = JSON.parse(xhttp.responseText);
      var kq1 = "";
      kq1 = ketquadocfile2.map(item2 => {
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
      document.getElementById("gall").innerHTML = kq1.join(" ");
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

