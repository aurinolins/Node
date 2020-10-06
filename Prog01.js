console.log("Olá Mundo");
var nome = "Aurino";
var sobrenome = "Lins";
console.log(nome+" "+sobrenome);
var funcsoma=require("c:/cursonode/soma");
console.log(funcsoma(80,50));
const express = require("express");
const app = express();
app.get("/", function(req,res){
   res.send("Seja bem vindo ao meu app");
});

app.get("/sobre/:cargo/:nome", function(req,res){
   res.send("Seja bem vindo ao meu app - Cargo : "+req.params.cargo+
   	          " Nome : "+req.params.nome);
});


app.listen(8081,function(){
	console.log("Servidor rodando na url: http://localhost:8081");
});
