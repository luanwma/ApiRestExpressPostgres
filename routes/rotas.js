const express = require('express')

const router = express.Router()
const nodemailer = require('nodemailer')




router.get('/' , (req, res) =>{
    res.render('login')
})

router.get('/login', (req, res) =>{
    res.render('login')
}) 

router.get('/recuperar_senha', (req, res) =>{
    res.render('recuperar_senha')
})

router.get('/cadastro_usuario', (req, res) =>{
    res.render('cadastro_usuario')
})

router.get('/cadastro_receita', (req, res) =>{
    res.render('cadastro_receita')
})

router.get('/minhas_receitas', (req, res) =>{
    res.render('minhas_receitas')
})

router.get('/cadastro_categoria', (req, res) =>{
    res.render('cadastro_categoria')
})

router.get('/contato', (req, res) =>{
    res.render('contato')
})
router.post('/contato', (req, res) =>{
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
      
    const mailBody = {
        name : nome,
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
          res.send('<p> Mensagem enviada com sucesso!</p>');
         
        }
      });
      
})

router.get('/sobre', (req, res) =>{
    res.render('sobre')
})
router.get('/tecnologias', (req, res) =>{
    res.render('tecnologias')
})

router.post('/cadastro_receitas', (req, res) =>{
    const {titulo} = req.body;
})

module.exports = router