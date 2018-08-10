// JavaScript Document

document.getElementById("next").disabled = false;
//Next Button
function next(){
"use strict";
//var latest=3;
//actual link
var nFirstLink = location.href;
//length for page #
var nNLength = nFirstLink.length-7;
//page #
var pageNum= parseInt(nFirstLink.substr(nNLength,(nNLength+2)),10);
//final
var nSecondLink = (nFirstLink.substr(0,nNLength));
var nEndLink = (nFirstLink.substr((nSecondLink.length+2),nFirstLink.length));
//location check
if(window.location==="../../DTIS-home.html"){
   window.location=("./A1/Site/DTIS-02.html");
   }
else{
//if less than 10
if(pageNum<10){
window.location=(nSecondLink+"0"+(pageNum+1)+nEndLink);
   }
//more than 10
 else{
window.location=(nSecondLink+(pageNum+1)+nEndLink);
}
}
}
document.getElementById("previous").disabled = false;
document.getElementById("next").onclick = next();
