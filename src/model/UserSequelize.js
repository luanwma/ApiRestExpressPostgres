const {Model, DataTypes} = require("sequelize")
const sequelize = require("../../config/database")

class User extends Model{}
User.init({
    name: {
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
},{
    sequelize,
    modelName:"users",
    timestamps:false
})

module.exports = User


