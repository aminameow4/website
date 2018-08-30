// JavaScript Document
//COMIC: THE ADVENTURE CREW
//BLANK: ../../A1/Site/TAC-0X.html

//current pages: 3

// Pages array (include links)
var pageNumber = ["../../A1/Site/TAC-01.html", "../../A1/Site/TAC-02.html", "../../A1/Site/TAC-03.html",];
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
	   	   document.location="./"+"tac"+pageNumber[0]; 
}
//latest
function homeLatest(){
"use strict";
	   	   document.location="./"+"tac"+pageNumber[i]; 
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
document.getElementById("next").onclick = function() {
"use strict"; 
	next();};
document.getElementById("latest").onclick = function() {
"use strict"; 
	latest();};
//end 
