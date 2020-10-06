const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste02', 'root','dany2012', {
         host : 'localhost',
         dialect : 'mysql'
})

sequelize.authenticate().then(function() {
    console.log("Conectado ao banco de dados com sucesso !!!")
}).catch(function(error) {
        console.log("Erro ao se conectar com o banco - "+error)
})

const usuarios = sequelize.define('users', {
    nome : {type : Sequelize.STRING},
    email : {type : Sequelize.STRING},
    idade : {type : Sequelize.INTEGER}
})

usuarios.create({
      nome : 'Aurino C. Lins JUnior',
      email : 'linsaurino@gamil.com',
      idade : 55,
})
console.log(usuarios.find({}));

