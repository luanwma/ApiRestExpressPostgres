const {Model, DataTypes, Sequelize} = require("sequelize")
const sequelize = require("../../config/database.js")

class Categoria extends Model{}
Categoria.init({
    nameCategoria:{
        type: DataTypes.STRING,
        allowNull:false,
        
    },
    idCategoria:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement :true,
    }
}),{
    sequelize,
    modelName : "categorias",
    timestamps : false
}
module.exports = Categoria
