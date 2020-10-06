const express = require("express");

const app = express();


app.get("/systeste", function(req,res){
    res.send("Bem vindo ao sistema de teste !!!")
})

app.post("/systeste", function(req,res){
    req.params()
})

app.put()

app.delete()



app.listen(8081, function(){
    console.log("porta 8081 para testes !!!")
})