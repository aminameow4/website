// JavaScript Document
document.getElementById("previous").disabled = false;
//Previous Button
function previous(){
"use strict";
//actual link
var pFirstLink = location.href;
//length for page #
var pNLength = pFirstLink.length-7;
//page #
var pageNum= parseInt(pFirstLink.substr(pNLength,(pNLength+2)),10);
//final
var pSecondLink = (pFirstLink.substr(0,pNLength));
var pEndLink = (pFirstLink.substr((pSecondLink.length+2),pFirstLink.length));
//location check
//if less than 10
if(window.location==="../../DTIS-home.html"){
   window.location=("../../DTIS-home.html");
   }
else{
if(pageNum<10){
window.location=(pSecondLink+"0"+(pageNum-1)+pEndLink);
   }
//more than 10
 else{
window.location=(pSecondLink+(pageNum-1)+pEndLink);
}
}
}
document.getElementById("previous").disabled = false;
document.getElementById("previous").onclick = previous();
