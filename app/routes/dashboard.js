module.exports = function(application){
	application.get('/dashboard', function(req, res){
		application.app.controllers.dashboard.index(application, req, res);
	});

	application.get('/logout', function(req, res){
		application.app.controllers.dashboard.logout(application, req, res);
	});

	// rotas músicas
	application.get('/musicas', function(req, res){
		application.app.controllers.dashboard.musicas(application, req, res);
	});
	
	application.get('/novamusica', function(req, res){
		application.app.controllers.dashboard.novamusica(application, req, res);
	});

	application.get('/visualizar', function(req, res){
		application.app.controllers.dashboard.getMusica(application, req, res);
	});

	application.post('/inserirMusica', function(req, res){
		application.app.controllers.newitem.inserirMusica(application, req, res);
	});

	// rotas repertórios
	application.get('/repertorios', function(req, res){
		application.app.controllers.dashboard.repertorios(application, req, res);
	});

	application.get('/novorepertorio', function(req, res){
		application.app.controllers.dashboard.novorepertorio(application, req, res);
	});

	application.post('/inserirRepertorio', function(req, res){
		application.app.controllers.newitem.inserirRepertorio(application, req, res);
	});

	// rotas bandas
	application.get('/bandas', function(req, res){
		application.app.controllers.dashboard.bandas(application, req, res);
	});

	application.get('/novabanda', function(req, res){
		application.app.controllers.dashboard.novabanda(application, req, res);
	});

	application.post('/inserirBanda', function(req, res){
		application.app.controllers.newitem.inserirBanda(application, req, res);
	});

	// rotas perfil
	application.get('/perfil', function(req, res){
		application.app.controllers.dashboard.perfil(application, req, res);
	});
}