// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
var username = document.getElementById("username");
var password = document.getElementById("password");
var btn=document.getElementById("submit")
console.log(btn);
btn.addEventListener('click', validate);
function validate(e){
var cible=e.target
if ( username.value == "Formget" && password.value == "formget#123"){
alert ("Login successfully");
window.location.replace ("../home/project.html") ; // Redirecting to other page.

}
else{

alert("wrong info");

}}