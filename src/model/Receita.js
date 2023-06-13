const {Model, DataTypes, Sequelize} = require("sequelize")
const sequelize = require('../../config/database.js')

class Receita extends Model{}
Receita.init({
    nomeReceita :{
        type:DataTypes.STRING,
        allowNull:false,

    },
    idCategoria : {
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model : Categoria,
            key: 'idCategoria',
        },
    },
    descricao : {
        type:DataTypes.STRING,
    },
    ingredientes : {
        type:DataTypes.STRING,
    }, 
    modoPreparo :{
        type:DataTypes.STRING,
    },
    idReceita :{
        type : Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,

    }
}),{
    sequelize,
    modelName : "receitas",
    timestamps : false
}
/*
Receita.belongsTo(Categoria , {
    foreignKey: 'idCategoria'
}) */

module.exports = Receita
