const express = require('express')
const path = require('path')
const app = express()
const port = 3000   

app.use(express.json())

app.use(express.static(path.join(__dirname,'../view')))

const sequelize = require("../config/database")
const Routes = require('../routers/routes')

sequelize.sync().then( () =>{
    console.log("Database conectado")
    
})

//app.use("/api/users", Routes)

app.get('/', (req, res) =>{
   
    res.sendFile(path.join(__dirname, '../view', 'login.html'))
})

app.get('/recuperar_senha', (req, res) =>{
    res.sendFile(path.join(__dirname, '../view', 'recuperar_senha.html'))
})

app.get('/cadastro_usuario', (req, res) =>{
    res.sendFile(path.join(__dirname,'../view', 'cadastro_usuario.html'))
})



app.get('/cadastro_receita', (req, res ) =>{


    res.sendFile(path.join(__dirname, '../view', 'cadastro_receita.html'))

})


app.get('/ferramentas_utilizadas', (req, res) =>{
    res.sendFile(path.join(__dirname, '../view', 'ferramentas_utilizadas'))
})


app.listen(process.env.port || 3000, ()=>{
    console.log('Servidor rodando -> localhost:',port)
})



module.exports= {app}