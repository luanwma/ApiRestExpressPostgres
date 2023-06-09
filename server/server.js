const express = require('express')
const path = require('path')
const mustacheExpress = require('mustache-express');
const app = express()
const port = 3000   
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

//jwt instalar jsonwebtoken
const jwt = require('jsonwebtoken');
//importa o arquivo com as credenciais






//mustache
app.set('views', path.join(__dirname,'../view'));
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());
//mustache
//css
app.use(express.static(path.join(__dirname,'../view')))

const sequelize = require("../config/database")

const usersController =  require('../routes/rotasUser')

//app.get('/', usersController.get)

sequelize.sync().then( () =>{
    console.log("Database conectado")
    
})


//envio de email
const nodemailer = require('nodemailer')
//chamando dotenv
require('dotenv').config()



//rotas
const router = require('../routes/rotas.js')
const routerUser = require('../routes/rotasUser.js')

app.use(router)
app.use(routerUser)


//app.use("/api/users", Routes)
/*

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
app.post('/contato', (req, res) =>{
    const {nome, email, assunto, mensagem} = req.body
    console.log("nome -> ",nome," email -> ",email ," assunto -> ",assunto ," msg -> ",mensagem)
   

   
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER, // generated ethereal user
          pass: process.env.EMAIL_PASS // generated ethereal password
        }
      });



    console.log("email",email)
    const mailBody = {
       sender:email,
        replyTo: email,
        to: process.env.EMAIL_USER,
        subject: assunto,
        text: mensagem,
    

       // text: `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`
      };

      console.log(mailBody)

      transporter.sendMail(mailBody, (error, info) => {
        if (error) {
          console.log(error);
          res.send('Ocorreu um erro no envio da mensagem.');
        } else {
          console.log('Mensagem enviada: ' + info.response);
          res.send('Mensagem enviada com sucesso!');
          window.location.href = 'login'
        }
      });

     
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


app.listen(process.env.PORT || 3000, ()=>{
    if(process.env.PORT){
        console.log('Server running on -> '+'htp://localhost:'+process.env.PORT)
    }else{
        console.log('Servidor rodando ->' +'http://localhost:'+port)

    }

    })



module.exports= {app}