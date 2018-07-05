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

	// Ajax troca de paginas

		$('.music').click(function(){
			$.ajax({
				url:'/musicas',
				method: "get",
				success: function(data){
					$('#content').html(data);
				}
			});
		});

		$('.repertory').click(function(){
			$.ajax({
				url:'/repertorios',
				method: "get",
				success: function(data){
					$('#content').html(data);
				}
			});
		});

		$('.band').click(function(){
			$.ajax({
				url:'/bandas',
				method: "get",
				success: function(data){
					$('#content').html(data);
				}
			});
		});

		$('.profile').click(function(){
			$.ajax({
				url:'/perfil',
				method: "get",
				success: function(data){
					$('#content').html(data);
				}
			});
		});


})(window, document, jQuery);