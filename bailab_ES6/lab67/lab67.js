function Person(Name, Email, Password) {
    this.Name = Name || "unknown";
    this.Email = Email || "unknown";
    this.Password = Password || "unknown";
}
Person.prototype.getFullName = function () {
    return this.Name;
}
function Users(Name, Email, Password, Address) {
    Person.call(this, Name, Email, Password);
    this.Address = Address || "unknown";
    // this.Grade = grade || 0;
}
//Users.prototype = Person.prototype;
Users.prototype = new Person();
Users.prototype.constructor = Users;
var std = [];

var firebaseConfig = {
	apikey: "AIzaSyCt1pKXRqiegCreGUN110EIT -5100d7xY",
	authDomain: "test-45959.firebaseapp.com",
	databaseURL: "https://lab67-7c8b3-default-rtdb.asia-southeast1.firebasedatabase.app",
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
	var myFirebase = firebase.database().ref("shop");
	var a = Math.floor(Math.random() * 10000);
	var recommendations = myFirebase.child(document.getElementById("username").value + a);
	setTimeout(pushStuff(), 500);
	function pushStuff() {
		recommendations.set({		
			"Users" : std,
			// "numberUsers": document.getElementById("username").value,
			// "passwordUsers": document.getElementById("password").value,
			// "numberUsers": document.getElementById("email").value,
			// "numberUsers": document.getElementById("address").value,
		});
	}
};

$(document).ready(function () {
    $("#register-submit").click(function () {
        std = new Users(
            document.getElementById("username").value, document.getElementById("email").value, document.getElementById("password").value, document.getElementById("address").value
        );
        console.log(std);
        GetAllData(PushData);
    });
});

export default std;

console.log(std);
// console.log(std.getFullName()); // trung
console.log(std instanceof Users); // true
console.log(std instanceof Person); // true
