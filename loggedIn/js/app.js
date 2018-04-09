var btnMenu = document.getElementById("btnMenu");

var sideMenu = document.getElementById("sideMenu");

var topMenu = document.getElementById("topMenu");

btnMenu.addEventListener("click", function(){

	sideMenu.classList.toggle("hide-menu");
	sideMenu.classList.toggle("show-menu");
	topMenu.classList.toggle("col-sm-9");
});