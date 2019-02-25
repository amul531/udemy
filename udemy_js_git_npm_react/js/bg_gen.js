var css = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bg_body = document.getElementById("grad_bg");

function setGradient() {
	bg_body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.innerHTML = bg_body.style.background + ";";
}

color2.addEventListener("input", setGradient);