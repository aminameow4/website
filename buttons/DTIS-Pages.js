// JavaScript Document
//COMIC: DON'T TAKE IT SERIOUSLY 
//BLANK: https://felhzverse.github.io/website/dtis/A1/DTIS-02.html

//current pages: 3

// Pages array (include links)
var pageNumber = ["../../A1/Site/DTIS-01.html", "../../A1/Site/DTIS-02.html", "../../A1/Site/DTIS-03.html",];
var i= (pageNumber.length-1);
var thisPage; 
//ENABLE BUTTONS
document.getElementById("first").disabled = false;
document.getElementById("previous").disabled = false;
document.getElementById("next").disabled = false;
document.getElementById("latest").disabled = false;
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
window.alert(thisPage);
if (thisPage <=0) { 
window.alert("Welcome back to the start!"); 
} 
else{ 
window.alert(thisPage);
window.alert(pageNumber[thisPage]);
document.location=pageNumber[thisPage]; 
} }

//next button
function next(){
"use strict"; 
//for loop
  for(var x=0;x<pageNumber.length;x++){	
//go to
 if(thisPage===(pageNumber[x])){ 
	 	 if(thisPage === pageNumber[0]){
		window.location="./A1/Site/DTIS-02.html"; 
		}
	else{
	 window.location=pageNumber[(x+1)];
		window.alert(pageNumber[x+1]); 
 }
 }
}
}

//latest button
function latest(){
"use strict"; 
	   	   document.location=pageNumber[i]; 
}

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

