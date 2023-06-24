const Sequelize = require("sequelize")
const sequelize = new Sequelize("cookbook", "user", "password" , {
    dialect : 'sqlite',
    host: "migrations/dev.sqlite",
    storage:'migrations/database.sqlite',
    define : {
        timestamps : true, // salva data e hora de modificações
        underscored : false // se a tabela estiver com letra maiuscula criara com letra maiuscula se V
        
    }
})

//criar migrations rodar terminal
//npx sequelize migration:create --name=create-User

module.exports = sequelize;