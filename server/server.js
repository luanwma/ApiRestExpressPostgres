const express = require('express')
const path = require('path')
const mustacheExpress = require('mustache-express');
const app = express()
const port = 3000   

app.use(express.json())
//mustache
app.set('views', path.join(__dirname,'../view'));
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());
//mustache
//css
app.use(express.static(path.join(__dirname,'../view')))

const sequelize = require("../config/database")
const Routes = require('../routers/routes')

sequelize.sync().then( () =>{
    console.log("Database conectado")
    
})

//envio de email
const nodemailer = require('nodemailer')



//app.use("/api/users", Routes)

app.get('/' , (req, res) =>{
    res.render('login')
})

app.get('/login', (req, res) =>{
    res.render('login')
})

app.get('/recuperar_senha', (req, res) =>{
    res.render('recuperar_senha')
})

app.get('/cadastro_usuario', (req, res) =>{
    res.render('cadastro_usuario')
})

app.get('/cadastro_receita', (req, res) =>{
    res.render('cadastro_receita')
})

app.get('/minhas_receitas', (req, res) =>{
    res.render('minhas_receitas')
})

app.get('/cadastro_categoria', (req, res) =>{
    res.render('cadastro_categoria')
})

app.get('/contato', (req, res) =>{
    res.render('contato')
})

app.get('/sobre', (req, res) =>{
    res.render('sobre')
})
app.get('/tecnologias', (req, res) =>{
    res.render('tecnologias')
})

app.post('/cadastro_receitas', (req, res) =>{
    const {titulo} = req.body;
})


/*
app.get('/login', (req, res) =>{
   
    res.sendFile(path.join(__dirname, '../view', 'login.mustache'))
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
*/


app.listen(process.env.port || 3000, ()=>{
    console.log('Servidor rodando -> localhost:',port)
})



module.exports= {app}