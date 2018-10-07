// JavaScript Document
//FELHZVERSE MEDIA ARCHIVE

// Pages array (include links)
var pageNumber=[];
pageNumber[0]= "./Media/Media-01.html";
/*
pageNumber[1]= "./Media/Media-02.html";
pageNumber[2]= "./Media/Media-03.html";
pageNumber[3]= "./Media/Media-04.html";
pageNumber[4]= "./Media/Media-05.html";
pageNumber[5]= "./Media/Media-06.html";
pageNumber[6]= "./Media/Media-07.html";
pageNumber[7]= "./Media/Media-08.html";
pageNumber[8]= "./Media/Media-09.html";
pageNumber[9]= "./Media/Media-10.html";
pageNumber[10]= "./Media/Media-11.html";
*/

//actual code
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
	   	   document.location="./"+pageNumber[0]; 
}
//latest
function homeLatest(){
"use strict";
	   	   document.location="./"+pageNumber[i]; 
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

//random button
function random(){
"use strict";
var r= Math.floor((Math.random() *i));
	window.alert(r);
	   	   document.location=pageNumber[r]; 
}

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

