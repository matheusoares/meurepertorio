(function(window, document, $){

	$('.search-trigger').on('click', function(){
	  $('.form-search').toggleClass('hidden');
	  $('.form-search').removeClass('init');
	});	


	var btnResponsiveSideNav = document.getElementById("btnResponsiveSideNav");
	var sideNav = document.getElementById("sideNav");
	var container = document.getElementById("container");

	btnResponsiveSideNav.addEventListener("click", function(){
		sideNav.classList.toggle("off");
		container.classList.toggle("overflow");

	});

})(window, document, jQuery);