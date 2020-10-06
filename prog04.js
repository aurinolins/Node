const express = require("express");
const app = express();

app.get("/", function(req,res) {
    res.send("bem vindo a pagina raiz !!!")
})
    
app.get("/exemplo" , function(req,res){
    res.send("Seja Bem Vindo ao Meu Aplicativo/exemplo !!!")
})
app.get("/exemplo/segundonivel", function(req,res){
    res.send("Segundo Nivel !!! ")
})

app.listen(8081, function(){
    console.log("Estamos na porta 8081")
})
  