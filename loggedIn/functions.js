var btnSearch = document.getElementById("searchButton");
var formSearch = document.getElementById("formSearch");
var inputSearch = document.getElementById("inputSearch");
var imgSearch = document.getElementById("imgSearch");
var btnSearchSubmit = document.getElementById("btnSearchSubmit");

btnSearch.addEventListener("click", function(){
	inputSearch.focus();
	btnSearchSubmit.classList.toggle("btnSearchSubmit");
	formSearch.classList.toggle("hidden");
	formSearch.classList.toggle("form-search");
});

var btnResponsiveSideNav = document.getElementById("btnResponsiveSideNav");
var sideNav = document.getElementById("sideNav");
var container = document.getElementById("container");

btnResponsiveSideNav.addEventListener("click", function(){

	sideNav.classList.toggle("off");
	container.classList.toggle("overflow");

});




