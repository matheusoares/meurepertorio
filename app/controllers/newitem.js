module.exports.inserirMusica = function(application, req,res){
	
	var dadosForm = req.body;

	console.log(dadosForm);

	var connection = application.config.dbConnection;

	var MusicasDAO = new application.app.models.MusicasDAO(connection);

	MusicasDAO.inserirMusicas(dadosForm, res);

    res.redirect('/dashboard?msg=A');
}

module.exports.inserirRepertorio = function(application, req,res){
	
	var dadosForm = req.body;

	console.log(dadosForm);

	var connection = application.config.dbConnection;

	var RepertoriosDAO = new application.app.models.RepertoriosDAO(connection);

	RepertoriosDAO.inserirRepertorios(dadosForm, res);

    res.redirect('/dashboard?msg=A');
}

module.exports.inserirBanda = function(application, req,res){
	
	var dadosForm = req.body;

	console.log(dadosForm);

	var connection = application.config.dbConnection;

	var BandasDAO = new application.app.models.BandasDAO(connection);

	BandasDAO.inserirBandas(dadosForm, res);

    res.redirect('/dashboard?msg=A');
}