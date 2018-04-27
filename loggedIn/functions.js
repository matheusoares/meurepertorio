var btnSearch = document.getElementById("searchButton");
var formSearch = document.getElementById("formSearch");
var inputSearch = document.getElementById("inputSearch");
var imgSearch = document.getElementById("imgSearch");

btnSearch.addEventListener("click", function(){
	inputSearch.focus();
	formSearch.classList.toggle("hidden");
	formSearch.classList.toggle("form-search");
});




