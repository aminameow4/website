// JavaScript Document
//COMIC: DON'T TAKE IT SERIOUSLY 
//BLANK: https://felhzverse.github.io/website/dtis/A1/DTIS-02.html

//current pages: 3

// Pages array (include links)
var pageNumber = ["https://felhzverse.github.io/website/dtis/DTIS-home.html", "./DTIS-02.html", "./DTIS-03.html",];
var thisPage= location.href;  
var latest= pageNumber.length; 
//first button
function first(){
"use strict"; 	
window.location=pageNumber[0]; 
}

//previous button
function previous(){
"use strict"; 
//for loop
  for(var x=0;x<pageNumber.length;x++){	
//go to
 if(thisPage===(pageNumber[x])){ 
		window.location=pageNumber[(x-1)];
 }
}
}
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
 }
 }
}
}

//latest button
function latest(){
"use strict"; 
 	 if(thisPage === pageNumber[0]){
		window.location="./A1/Site/DTIS-03.html"; 
		}
	else{
window.location=pageNumber[latest]; 
}
}

//end 

