module.exports.cadastro = function(application, req,res){
	
	var dadosForm = req.body;

	console.log(dadosForm);

	var connection = application.config.dbConnection;

	var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

	UsuariosDAO.inserirUsuario(dadosForm, res);

	res.render('index', { retorno: {msg: 'Cadastro Realizado com sucesso!'}});
}