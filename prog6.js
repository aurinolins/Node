const Sequelize = require('sequelize')
const { create } = require('express-handlebars')
const sequelize = new Sequelize('teste01', 'root','dany2012', {
         host : 'localhost',
         dialect : 'mysql'
})

sequelize.authenticate().then(function() {
    console.log("Conectado ao banco de dados com sucesso !!!")
}).catch(function(error) {
        console.log("Erro ao se conectar com o banco - "+error)
})

const postagens = sequelize.define('postagens', {
      titulo : {type : Sequelize.STRING},
      conteudo : {type : Sequelize.TEXT},
})
  
postagens.get({titulo : "Ttitulo03", conteudo : "Conteudo de exemplo03"})

