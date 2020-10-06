const express = require('express')
const app = express()

const handlebars = require('express-handlebars')

app.engine('handlebars', handlebars({defaultLayout: main}))
app.set('view engine', 'handlebars')
    
app.listen(8081, function(){
    console.log("Funcionando na porta 8081 !!!")
})
