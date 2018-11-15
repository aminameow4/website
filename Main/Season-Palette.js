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
var m = d.getMonth(); 
var n = month[d.getMonth()];
function seasonLoad(){
"use strict"; 
	
function Winter(){
window.alert("Winter");
document.getElementById("trees").src = "../Images/WinterLogoTree.png";
}
function Spring(){
window.alert("Spring");
document.getElementById("trees").src = "../Images/SpringLogoTree.png";
}
function Summer(){
window.alert("Summer");
document.getElementById("trees").src = "../Images/SummerLogoTree.png";
}
function Fall(){
window.alert("Fall");
document.getElementById("trees").src = "../Images/FallLogoTree.png";
}

if(m<=2){
Winter(); 
   }
if(m<=5){
Spring(); 
   }
if(m<=8){		
Summer(); 
   }
if(m<=11){ 
Fall(); 
   }
	

}
