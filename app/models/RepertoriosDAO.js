function RepertoriosDAO(connection){
	this._connection = connection();
}

RepertoriosDAO.prototype.inserirRepertorios= function(repertorios){
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("repertorios", function(err, collection){
			collection.insert(repertorios);
			mongoclient.close();
		});
	});
}
RepertoriosDAO.prototype.buscarTodosRepertorios= function(idUsuario,req, res){
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("repertorios", function(err, collection){
			collection.find({"idUsuario" : idUsuario}).toArray(function(err, result){

				repertorios = result;
				res.render("loggedIn/repertory", {req: req.session, repertorios});


			});
			mongoclient.close();
		});
	});
}
module.exports = function(){
	return RepertoriosDAO;
}
