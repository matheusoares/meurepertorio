module.exports.index = function(application, req, res){

	if(req.session.autorizado !== true){
		res.redirect('/'); 
	}
    res.render('loggedIn/index', {req: req.session});
}

module.exports.musicas = function(application, req,res){

	if(req.session.autorizado !== true){
		res.redirect('/'); 
	}

	var connection = application.config.dbConnection;
    var MusicasDAO = new application.app.models.MusicasDAO(connection);

    var idUsuario = req.session._id;
	MusicasDAO.buscarTodasMusicas(idUsuario,req, res);
	
} 

module.exports.getMusica = function(application, req,res){

	if(req.session.autorizado !== true){
		res.redirect('/'); 
	}

	var connection = application.config.dbConnection;
 	var MusicasDAO = new application.app.models.MusicasDAO(connection);

    var idUsuario = req.session._id;
    var nameMusica = req.query.musica;


	MusicasDAO.buscarMusica(idUsuario, nameMusica,req, res);
	
} 

module.exports.novamusica = function(application, req,res){

	if(req.session.autorizado !== true){
		res.redirect('/'); 
	}
	res.render("loggedIn/addmusic", {req: req.session});
} 

module.exports.repertorios = function(application, req,res){

	if(req.session.autorizado !== true){
		res.redirect('/'); 
	}

	var connection = application.config.dbConnection;
    var RepertoriosDAO = new application.app.models.RepertoriosDAO(connection);

    var idUsuario = req.session._id;
	RepertoriosDAO.buscarTodosRepertorios(idUsuario,req, res);
	
} 

module.exports.novorepertorio = function(application, req,res){

	if(req.session.autorizado !== true){
		res.redirect('/'); 
	}

	res.render("loggedIn/addrepertory", {req: req.session});
} 

module.exports.bandas = function(application, req,res){

	if(req.session.autorizado !== true){
		res.redirect('/'); 
	}

	var connection = application.config.dbConnection;
    var BandasDAO = new application.app.models.BandasDAO(connection);

    var idUsuario = req.session._id;
	BandasDAO.buscarTodasBandas(idUsuario,req, res);
	
} 

module.exports.novabanda = function(application, req,res){

	if(req.session.autorizado !== true){
		res.redirect('/'); 
	}

	res.render("loggedIn/addband", {req: req.session});
} 

module.exports.logout = function(application, req, res){

	if(req.session.autorizado !== true){
		res.redirect('/'); 
	}

	req.session.destroy();
    res.render('index', { retorno: {} });
}

