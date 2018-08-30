// JavaScript Document
//COMIC: DON'T TAKE IT SERIOUSLY 
//BLANK: https://felhzverse.github.io/website/dtis/A1/DTIS-02.html

//current pages: 3

// Pages array (include links)
var pageNumber = ["../../A1/Site/DTIS-01.html", "../../A1/Site/DTIS-02.html", "../../A1/Site/DTIS-03.html",];
var i= (pageNumber.length-1);
var thisPage=thisPage-1; 

//ENABLE BUTTONS
document.getElementById("first").disabled = false;
document.getElementById("previous").disabled = false;
document.getElementById("next").disabled = false;
document.getElementById("latest").disabled = false;

//HOME PAGE
//first
function homeFirst(){
"use strict"; 
	   	   document.location="./"+"dtis"+pageNumber[0]; 
}
//latest
function homeLatest(){
"use strict";
	   	   document.location="./"+"dtis"+pageNumber[i]; 
}

//first button
function first(){
"use strict";
	   	   document.location=pageNumber[0]; 
}

//previous button
function previous(){
"use strict"; 
//for loop
thisPage=thisPage-1; 
if (thisPage <0) { 
window.alert("Welcome back to the start!"); 
} 
else{ 
document.location=pageNumber[thisPage]; 
} }

//middle button
function middle(){
"use strict"; 
//for loop
window.alert("honk honk"); }

//next button
function next(){
"use strict"; 
//for loop
thisPage=thisPage+1;
if (thisPage > i) { 
window.alert("All caught up!"); 
} 
else{ 
document.location=pageNumber[thisPage]; 
} }

//latest button
function latest(){
"use strict"; 
	   	   document.location=pageNumber[i]; 
}

//PAGE SHIT
function altText() {
	"use strict";
    var desc = document.getElementById("page").alt;
    window.alert(desc); 
}

document.getElementById("page").onclick = function() {
"use strict"; 
	altText();};

//EXECUTE
document.getElementById("first").onclick = function() {
"use strict"; 
	first();};
document.getElementById("previous").onclick = function() {
"use strict"; 
	previous();};
document.getElementById("middle").onclick = function() {
"use strict"; 
	middle();};
document.getElementById("next").onclick = function() {
"use strict"; 
	next();};
document.getElementById("latest").onclick = function() {
"use strict"; 
	latest();};
//end 

