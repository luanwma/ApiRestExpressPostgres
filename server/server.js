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

app.get('/' , (req, res) =>{
    res.sendFile(path.join(__dirname, '../view', 'login.html'))
})

app.get('/login', (req, res) =>{
   
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

app.get('/minhas_receitas', (req, res ) =>{

    res.sendFile(path.join(__dirname, '../view', 'minhas_receitas.html'))

})

app.get('/cadastro_categoria', (req, res) =>{
    res.sendFile(path.join(__dirname , '../view' , 'cadastro_categoria.html'))
})

app.get('/contato' , (req, res) => {
    res.sendFile(path.join(__dirname, '../view', 'contato.html'))
})


app.get('/sobre', (req, res) =>{
    res.sendFile(path.join(__dirname, '../view', 'sobre.html'))
})


app.listen(process.env.port || 3000, ()=>{
    console.log('Servidor rodando -> localhost:',port)
})



module.exports= {app}