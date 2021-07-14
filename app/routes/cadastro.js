module.exports = function(application){
	application.post('/cadastro', function(req, res){
		application.app.controllers.cadastro.cadastro(application, req, res);
	});
}