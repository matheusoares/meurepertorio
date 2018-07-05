function UsuariosDAO(connection){
    this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("usuarios", function(err, collection){
            collection.insert(usuario);
            mongoclient.close();
        });
    });
}

UsuariosDAO.prototype.login = function(usuario, req, res){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("usuarios", function(err, collection){
            collection.find(usuario).toArray(function(err, result){
                
                if(result[0] != undefined){

                    req.session.autorizado = true;

                    req.session.usuario = result[0].name;
                    req.session._id = result[0]._id;
                }

                if(req.session.autorizado){
                    res.render("loggedIn/index", {req: req.session});
                }else{
                    res.render('index', { retorno: {msg: 'Erro ao realizar o login!'}});
                }

            });
            mongoclient.close();
        });
    });
} 

module.exports = function(){
    return UsuariosDAO;
}