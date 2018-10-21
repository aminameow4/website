function seasonLoad(){
"use strict"; 

var month;
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var d = new Date();
var x= getMonth(); 
var n = month[d.getMonth()];
window.alert("The current month is "+n);
function Winter(){
window.alert("Winter");
document.getElementById("trees").src = "WinterLogoTree.png";
}
function Spring(){
window.alert("Spring");
document.getElementById("trees").src = "SpringLogoTree.png";
}
function Summer(){
window.alert("Summer");
document.getElementById("trees").src = "FallLogoTree.png";
}
function Fall(){
window.alert("Fall");
document.getElementById("trees").src = "FallLogoTree.png";
document.getElementByClass("p2").style.color = "blue";	
}

if(x<=2){
Winter(); 
   }
if(x<=5){
Spring(); 
   }
if(x<=8){		
Summer(); 
   }
if(x<=11){ 
Fall(); 
   }
	

}
