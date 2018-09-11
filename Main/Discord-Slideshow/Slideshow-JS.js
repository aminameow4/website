var slide = 1;
function showSlides() {
	"use strict"; 
 document.getElementById('imageBox').src = "./Discord-Slideshow/p" + slide + ".png";
    setTimeout(showSlides, 8000); // Change image every 2 seconds
}