module.exports.index = function(application, req, res){
    res.render('index', { retorno: {}});
}

module.exports.login = function(application, req, res){
    
    var dadosForm = req.body;

    req.assert('email', 'Usuário não pode ser vazio').notEmpty();
    req.assert('password', 'Senha não pode ser vazia').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('index', { retorno: {msg: 'Erro ao realizar o login!'}});
        return;
    }

    var connection = application.config.dbConnection;
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

    UsuariosDAO.login(dadosForm, req, res);


}