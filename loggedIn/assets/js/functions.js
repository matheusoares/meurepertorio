(function(window, document, $){

	$('.trigger, .mask').on('click', function(){
		$('.sidenav').toggleClass('active-menu desactive-menu');
		$('.brand').toggleClass('d-grid desactive-menu');
		$('.mask').toggleClass('grid-mask');
	});

	$('.search-trigger, .close-search').on('click', function(){
		
		if($('#search').hasClass('search')){
			$('#search').removeClass('search').addClass('search-off');
		}else{
			$('#search').removeClass('search-off').addClass('search');
		}
		
	});

})(window, document, jQuery);