var http = require('http');

var server = http.createServer(function(req,res){
	res.end("<html><body><h1>Hello</h1></body></html>")
});
server.listen(3000);

console.log('logado no sistema')