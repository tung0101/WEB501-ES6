showproducts();
showlistproducts();
function showproducts() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var ketquadocfile = JSON.parse(xhttp.responseText);

    }
  };
  xhttp.open("GET", "json/listproduct.json", true);
  xhttp.send();
};


var firebaseConfig = {
  apikey: "AIzaSyCt1pKXRqiegCreGUN110EIT -5100d7xY",
  authDomain: "test-45959.firebaseapp.com",
  databaseURL: "https://shop-7ee53-default-rtdb.firebaseio.com",
  projectId: "test-45959",
  storageBucket: "test-45959.appspot.com",
  messagingSenderId: "722480026888",
  appId: "1: 722480026888: web: 75ab6126567ca8197288bd",
};
firebase.initializeApp(firebaseConfig);
var hi = ""
function FetchAllData() {
  firebase
    .database()
    .ref("listProduct")
    .once("value", function (snapshot) {
      var hi = ""
      snapshot.forEach( function (ChildSnapshot) {
        var courseName = ChildSnapshot.val().name;
        let institute = ChildSnapshot.val().gia;
        let imgValue = ChildSnapshot.val().hinh;
        // addItemsToList(courseName, institute, imgValue);
        hi += courseName;
      });
      console.log(hi);
      
      // return hi;
    });
}

FetchAllData();

function list() {
  var kq = "";
  for (var i = 0; i <= 3; i++) {
    var name = "trung" + i;
    kq += `<div class="col-md-6 col-lg-4">
  <div class="card text-center card-product">
    <div class="card-product__img">
      <img class="card-img" src="img/product/product${i+1}.png" alt="">
      <ul class="card-product__imgOverlay">
        <li><button><i class="ti-search"></i></button></li>
        <a href="#" data-name="${name}" data-price="1.1" class="add-to-cart btn btn-primary">Add to
          cart</a>
        <li><button><i class="ti-heart"></i></button></li>
      </ul>
    </div>
    <div class="card-body">
      <p>Accessories</p>
      <h4 class="card-product__title"><a href="#">${name}</a></h4>
      <p class="card-product__price">$1.1</p>
    </div>
  </div>
</div>
`;
  }
  
  document.getElementById("listitems").innerHTML = kq;
}

list();
function showlistproducts() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var ketquadocfilelist = JSON.parse(xhttp.responseText);
      var kqlist = "";
      kqlist = ketquadocfilelist.map(item2 => {
        return `<option value="1">${item2.name}</option>`;
      });
      // var i = 0;
      // console.log(ketquadocfile2[0]);
      // for(i=0 ;i<6; i++){
      //     kq2 += `<option value="${i}">${ketquadocfile2[i]["name"]}</option>`;
      // }
      
      document.getElementById("lists").innerHTML = kqlist.join(" ");
    }
  };
  xhttp.open("GET", "json/listproduct.json", true);
  xhttp.send();
};
