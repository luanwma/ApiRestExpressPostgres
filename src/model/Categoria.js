const {Model, DataTypes, Sequelize} = require("sequelize")
const sequelize = require("../../config/database.js")

//class Categoria extends Model{}
const Categoria = sequelize.define('Categoria',{
    nomeCategoria:{type: DataTypes.STRING,allowNull:false},
    idCategoria:{ type: Sequelize.INTEGER, primaryKey:true,  autoIncrement :true,}
},{
    sequelize : sequelize,
    modelName : "categorias",
    timestamps : true
} )
module.exports = Categoria
