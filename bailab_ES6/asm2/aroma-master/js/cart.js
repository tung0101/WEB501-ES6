// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function() {
  
  cart = [];
  // Constructor
  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
  
  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  
    // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }
  

  // =============================
  // Public methods and propeties
  // =============================
  var obj = {};
  
  // Add to cart
  obj.addItemToCart = function(name, price, count) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function(name, count) {
    for(var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count --;
          if(cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function(name) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function() {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function() {
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function() {
    var totalCart = 0;
    for(var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }
  
  // List cart
  obj.listCart = function() {
    var cartCopy = [];
    for(i in cart) {
      item = cart[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
      
    }
    return cartCopy;
    
  }

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
})();

// *****************************************
// Triggers / Events
// ***************************************** 
// Add item
$('.add-to-cart').click(function(event) {
  event.preventDefault();
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  shoppingCart.addItemToCart(name, price, 1);
  displayCart();
});

// Clear items
$('.clear-cart').click(function() {
  shoppingCart.clearCart();
  displayCart();
});


function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for(var i in cartArray) {
    output += "<tr>"
      + "<td style='width: 33%;'>" + cartArray[i].name + "</td>" 
      + "<td>(" + cartArray[i].price + ")</td>"
      + "<td style='width:40%;'><div class='input-group' style='width:80%;'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
      + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
      + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + " style='width: 10%;'>+</button></div></td>"
      + "<td style='padding-left:160px;width:30%;'><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
      + " = " 
      + "<td>" + cartArray[i].total + "</td>" 
      +  "</tr>";
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
  
  console.log(shoppingCart.listCart());
}

// export {cartArray};
// Delete item button

$('.show-cart').on("click", ".delete-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCart(name);
  displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.addItemToCart(name);
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function(event) {
   var name = $(this).data('name');
   var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});

displayCart();

// firebase
var firebaseConfig = {
  apikey: "AIzaSyCt1pKXRqiegCreGUN110EIT -5100d7xY",
  authDomain: "test-45959.firebaseapp.com",
  databaseURL: "https://shop-7ee53-default-rtdb.firebaseio.com",
  projectId: "test-45959",
  storageBucket: "test-45959.appspot.com",
  messagingSenderId: "722480026888",
  appId: "1: 722480026888: web: 75ab6126567ca8197288bd",
};

function GetAllData(callback) {
  //var userData = require('./save_file.json');
  // var fs = require('fs')
  //   var obj = JSON.parse(fs.readFileSync('save_file.json').toString())
  var a = 2;
  if (typeof callback === 'function') {
      callback();
  }
}

function PushData() {
  // Initialize your Firebase app
  firebase.initializeApp(firebaseConfig);
  // Reference to your entire Firebase database
  var myFirebase = firebase.database().ref("cart");
  var a = Math.floor(Math.random() * 10000);
  var recommendations = myFirebase.child(a+document.getElementById("shipping_name").value);
  setTimeout(pushStuff(), 500);
  function pushStuff() {
      recommendations.set({
          "name": document.getElementById("shipping_name").value,
          "email": document.getElementById("shipping_email").value,
          "city": document.getElementById("shipping_city").value,
          "district": document.getElementById("shipping_district").value,
          "address": document.getElementById("shipping_address").value,
          "Product": shoppingCart.listCart(),
          // "numberProducts": document.getElementById("shipping_name").value,
          // "priceProducts": document.getElementById("shipping_name").value    
      });
  }
};
//}

var ho = 1


$(document).ready(function(){
  $("#checkoutCarts").click(function(){
    GetAllData(PushData);
    obj.clearCart = function() {
      cart = [];
      saveCart();
    }
    alert("ok");
  });
});