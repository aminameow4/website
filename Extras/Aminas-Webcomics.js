// JavaScript Document
// All, Action, Adventure, Comedy, Drama, Fantasy, LGBT, Mystery, Science Fiction, Slice of Life
var selection = document.getElementById("choice").options; 
var type = document.getElementById("choice").selectedIndex; 
function All() {
 "use strict"; 
	var x = document.getElementsByTagName("P");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//Action
function Action() {
  "use strict"; 
	var x = document.getElementByClass("action");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//Adventure
function Adventure() {
	"use strict"; 
    var x = document.getElementByClass("adventure");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//Comedy
function Comedy() {
	"use strict"; 
    var x = document.getElementByClass("comedy");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//Drama
function Drama() {
	"use strict"; 
    var x = document.getElementByClass("drama");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//Fantasy
function Fantasy() {
	"use strict"; 
    var x = document.getElementByClass("fantasy");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//LGBT
function LGBT() {
	"use strict"; 
    var x = document.getElementByClass("lgbt");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//Mystery
function Mystery() {
	"use strict"; 
    var x = document.getElementByClass("mystery");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//Science Fiction
function SciFi() {
	"use strict"; 
    var x = document.getElementByClass("scifi");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//Slice of Life 
function SoL() {
	"use strict"; 
    var x = document.getElementByClass("sol");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

var what= document.getElementById("heck").value(type);
if(type===""){
   
   }