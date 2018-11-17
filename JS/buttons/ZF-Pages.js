// JavaScript Document
//COMIC: ZODIAC FAMILY
//BLANK: ../../A1/Site/ZF-0X.html

// Pages array (include links)
var pageNumber=[];
pageNumber[0]= "../../A1/Site/ZF-01.html";
/* pageNumber[1]= "../../A1/Site/ZF-02.html";
pageNumber[2]= "../../A1/Site/ZF-03.html";
pageNumber[3]= "../../A1/Site/ZF-04.html";
pageNumber[4]= "../../A1/Site/ZF-05.html";
pageNumber[5]= "../../A1/Site/ZF-06.html";
pageNumber[6]= "../../A1/Site/ZF-07.html";
pageNumber[7]= "../../A1/Site/ZF-08.html";
pageNumber[8]= "../../A1/Site/ZF-09.html";
pageNumber[9]= "../../A1/Site/ZF-10.html";
pageNumber[10]= "../../A1/Site/ZF-11.html";
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
	   	   document.location="./"+"zf"+pageNumber[0]; 
}
//latest
function homeLatest(){
"use strict";
	   	   document.location="./"+"zf"+pageNumber[i]; 
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

//ARCHIVE
function archiveOne(){
"use strict";
	window.alert("./"+"zf"+pageNumber[1]);
	   	   document.location="./"+"zf"+pageNumber[1]; 
}




