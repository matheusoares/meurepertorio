function BandasDAO(connection){
	this._connection = connection();
}

BandasDAO.prototype.inserirBandas= function(bandas){
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("bandas", function(err, collection){
			collection.insert(bandas);
			mongoclient.close();
		});
	});
}
BandasDAO.prototype.buscarTodasBandas= function(idUsuario,req, res){
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("bandas", function(err, collection){
			collection.find({"idUsuario" : idUsuario}).toArray(function(err, result){

				bandas = result;
				res.render("loggedIn/band", {req: req.session, bandas});


			});
			mongoclient.close();
		});
	});
}
module.exports = function(){
	return BandasDAO;
}
