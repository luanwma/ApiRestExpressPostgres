const {Model, DataTypes, Sequelize} = require("sequelize")
const sequelize = require("../../config/database.js")

//const Categoria = require('./Categoria.js')
//const Receita = require('./Receita.js')

//User.hasMany(Receita, {foreignKey: 'idUser'})
//User.hasMany(Categoria, {foreignKey : 'idUser'})


class User extends Model{}
User.init({
    nomeUser: {
        type:DataTypes.TEXT
    },
    email:{
        type:DataTypes.STRING
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dataNascimento: {
        type: DataTypes.DATEONLY,
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


