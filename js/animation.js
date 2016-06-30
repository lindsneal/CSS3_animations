
				

$(document).ready(function() {


function boxResponsive() {
					document.getElementById("boxResponsive").style.WebkitAnimation = "responsiveBox 4s infinite"; // Code for Chrome, Safari and Opera
					document.getElementById("boxResponsive").style.animation = "responsiveBox 4s infinite";
					
				}
function MobileApps() {
					document.getElementById("mobileColor").style.WebkitAnimation = "play2 5s steps(5) infinite"; // Code for Chrome, Safari and Opera
					document.getElementById("mobileColor").style.animation = "play2 5s steps(5) infinite";
				}
function webAdmin() {
	document.getElementById("adminLock").style.WebkitAnimation = "adminLock 4s infinite"; // Code for Chrome, Safari and Opera
	document.getElementById("adminLock").style.animation = "adminLock 4s infinite";
}
function customDesign() {
					document.getElementById("flower").style.WebkitAnimation = "play 4s steps(5) infinite"; // Code for Chrome, Safari and Opera
					document.getElementById("flower").style.animation = "play 4s steps(5) infinite";
				}
function promotionAnalytics() {
    document.getElementsByClassName("path").style.WebkitAnimation = "dash 5s linear forwards infinite"; // Code for Chrome, Safari and Opera
    document.getElementsByClassName("path").style.animation = "dash 5s linear forwards infinite";
  }
function GearsWebDev() {
    document.getElementsByClassName("gear.one").style.WebkitAnimation = "counter-clockwise 7s infinite linear"; // Code for Chrome, Safari and Opera
    document.getElementsByClassName("gear.one").style.animation = "counter-clockwise 7s infinite linear";
  }

				customDesign();
				MobileApps();
				webAdmin();
				boxResponsive();
				promotionAnalytics();
				GearsWebDev();
});


