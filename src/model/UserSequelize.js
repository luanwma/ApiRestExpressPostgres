const {Model, DataTypes, Sequelize} = require("sequelize")
const sequelize = require("../../config/database.js")

const Categoria = require('./Categoria.js')
const Receita = require('./Receita.js')

//User.hasMany(Receita, {foreignKey: 'idUser'})
//User.hasMany(Categoria, {foreignKey : 'idUser'})


class User extends Model{}
User.init({
    nameUser: {
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dataNascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      idUser :{
        type : Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      }
},{
    sequelize,
    modelName:"users",
    timestamps:false
})

module.exports = User


