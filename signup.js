 var app = angular.module('signup', ['UserValidation']);
 angular.module('UserValidation', []);

 function insert() {

     localStorage.username = document.getElementById('user').value;
     localStorage.password = document.getElementById('pass1').value;
 }

 function verify() {
     var user = document.getElementById('user').value;
     var pass = document.getElementById('pass').value;

     if (localStorage.username == user && localStorage.password == pass) {
         document.getElementById('span1').innerHTML = "Correct Username";
         document.getElementById('span2').innerHTML = "Correct Password";
     } else {
         document.getElementById('span1').innerHTML = "Wrong Username";
         document.getElementById('span2').innerHTML = "Wrong Password";
     }
 }