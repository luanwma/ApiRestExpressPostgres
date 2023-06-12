const Sequelize = require("sequelize")
const sequelize = new Sequelize("users_bd", "user", "password" , {
    dialect : 'sqlite',
    host: "./dev.sqlite",
})
module.exports = sequelize