// JavaScript Document


//First Button
function first(){
	document.getElementById("first").disabled = true;
}
//Next Button
function next(){
var latest=3;
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
//if less than 10
if(pageNum<10){
window.location=(nSecondLink+"0"+(pageNum+1)+nEndLink);
   }
//elseif
else if(pageNum===latest){
document.getElementById("next").disabled = true;}
//more than 10
 else{
window.location=(nSecondLink+(pageNum+1)+nEndLink);
}
}
}
//Previous Button
function previous(){
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
if ((pFirstLink="../../DTIS-home.html")||(pFirstLink="file:///C:/Users/prett/Desktop/Felhzverse/dtis/DTIS-home.html")){
	document.getElementById("previous").disabled = true;}
else{
//if less than 10
if(pageNum<10){
window.location=(pSecondLink+"0"+(pageNum-1)+pEndLink);
   }
//more than 10
 else{
window.location=(pSecondLink+(pageNum-1)+pEndLink);
}
}
}

//Latest button
function latest(){
var latest=3;
var link=location.href; 
var length=link.length;
var pageNum= parseInt(link.substr(length,(length+2)),10);
if(latest===pageNum){
	document.getElementById("latest").disabled = true;
}
else{
	document.getElementById("latest").disabled = false;
//second set
var sLink=(link.substr(0,length));
var eLink =(link.substr((sLink+2),length));
	//final
if(latest<10){
window.location=(sLink+"0"+(latest)+eLink);
   }
else{
window.location=(sLink+(latest)+eLink);
}

}
}
//end