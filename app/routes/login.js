//var connectionFactory = require('../infra/connectionFactory');OLD

module.exports = function(app){
	app.get('/autentica', function(req,res){

	    var connection = app.infra.connectionFactory();

	    connection.query('select * from usuario', function(err,results){
	    	res.render('autentica/login',{lista:results});
	    	
	    	var dados = results;
	    	console.log(dados[3]);
	    	for(var i=0;i<=dados.length;i++){
	    		

	    	} 
	    	
	    });

	    

	    connection.end();

	    console.log('atendendo request');
	});

	
	app.get('/valida', function(req,res){
		res.render('autentica/valida');
	});
	
	app.get('/lista', function(req,res){
		res.render('autentica/lista_livros');
	});

}

