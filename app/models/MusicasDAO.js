function MusicasDAO(connection){
	this._connection = connection();
}

MusicasDAO.prototype.inserirMusicas= function(musicas){
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("musicas", function(err, collection){
			collection.insert(musicas);
			mongoclient.close();
		});
	});
}
MusicasDAO.prototype.buscarTodasMusicas= function(idUsuario,req, res){
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("musicas", function(err, collection){
			collection.find({"idUsuario" : idUsuario}).toArray(function(err, result){

				musicas = result;
				res.render("loggedIn/music", {req: req.session, musicas});


			});
			mongoclient.close();
		});
	});
}
MusicasDAO.prototype.buscarMusica = function(idUsuario, nameMusica,req, res){
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("musicas", function(err, collection){
			collection.find({"name" : nameMusica}).toArray(function(err, result){

				console.log(result);

				res.render("loggedIn/musica", {req: req.session, result});


			});
			mongoclient.close();
		});
	});
}
module.exports = function(){
	return MusicasDAO;
}
