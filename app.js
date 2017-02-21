
var app = require('./config/express')();



app.listen(3000,function(){
    console.log("V8 Running!");

});


//var rotasAutentica = require('./app/routes/login')(app);OLD

/*
var app = require('./config/express')();
var rotasAutentica = require('./app/routes/produtos');

app.listen(3000,function(){
    console.log("servidor rodando");
});

*/