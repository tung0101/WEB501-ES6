// // Javascript to toggle the background colors of the register and //login tabs.
// $(function () {
// 	$('#login-form-link').click(function (e) {
// 		$("#login-form").delay(100).fadeIn(100);
// 		$("#register-form").fadeOut(100);
// 		$('.login').css({ "background": "#0269c2" });
// 		$('.register').css({ "background": "#fdfdfd" });
// 		$('.login').css({ "border": "2px solid black" });
// 		$('.register').css({ "color": "#000" });
// 		$('.login').css({ "color": "#fff" });
// 		$('.register').css({ "border": "0px solid black" });

// 		e.preventDefault();
// 	});

// 	$('#register-form-link').click(function (e) {
// 		$("#register-form").delay(100).fadeIn(100);
// 		$("#login-form").fadeOut(100);
// 		$('.login').css({ "background": "#0269c2" });
// 		$('.register').css({ "color": "#fff" });
// 		$('.login').css({ "color": "#000" });
// 		$('.login').css({ "border": "0px solid black" });
// 		$('.register').css({ "border": "2px solid black" });
// 		$('.register').css({ "color": "#fff" });
// 		$('.login').css({ "background": "#fdfdfd" });
// 		$('.register').css({ "background": "#0269c2" });
// 		e.preventDefault();
// 	});

// });
// import std from "./lab67.js";
// firebase
// var firebaseConfig = {
// 	apikey: "AIzaSyCt1pKXRqiegCreGUN110EIT -5100d7xY",
// 	authDomain: "test-45959.firebaseapp.com",
// 	databaseURL: "https://lab67-7c8b3-default-rtdb.asia-southeast1.firebasedatabase.app",
// 	projectId: "test-45959",
// 	storageBucket: "test-45959.appspot.com",
// 	messagingSenderId: "722480026888",
// 	appId: "1: 722480026888: web: 75ab6126567ca8197288bd",
// };

// function GetAllData(callback) {
// 	//var userData = require('./save_file.json');
// 	// var fs = require('fs')
// 	//   var obj = JSON.parse(fs.readFileSync('save_file.json').toString())
// 	var a = 2;
// 	if (typeof callback === 'function') {
// 		callback();
// 	}
// }
// function PushData() {
// 	// Initialize your Firebase app
// 	firebase.initializeApp(firebaseConfig);
// 	// Reference to your entire Firebase database
// 	var myFirebase = firebase.database().ref("shop");
// 	var a = Math.floor(Math.random() * 10000);
// 	var recommendations = myFirebase.child(a);
// 	setTimeout(pushStuff(), 500);
// 	function pushStuff() {
// 		recommendations.set({		
// 			"Users" : std,
// 			// "numberUsers": document.getElementById("username").value,
// 			// "passwordUsers": document.getElementById("password").value,
// 			// "numberUsers": document.getElementById("email").value,
// 			// "numberUsers": document.getElementById("address").value,
// 		});
// 	}
// };

// console.log(std);
// $(document).ready(function(){
// 	$("#register-submit").click(function(){
// 	  GetAllData(PushData);
	  
// 	  alert("regiter ok");
// 	});
//   });
// GetAllData(PushData);
function toggleform() {
	var container = document.querySelector('.container');
	container.classList.toggle('active');
}
