
const nodemailer = require('nodemailer')

require('dotenv').config()

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASS // generated ethereal password
    }
  });

 
 /* const mailBody = {
     sender:email,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: assunto,
      text: mensagem,
  

     // text: `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`
    }; */
    mailBody = {}

    function setMessage( mailBody){
      const {nome, emailRemetente, assunto, mensagem} = mailBody
      mailBody = {
        name: nome,
        sender:emailRemetente,
        replyTo: emailRemetente,
        to: process.env.EMAIL_USER,
        subject: assunto,
        text: mensagem,
      }
    }


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

 

 
  
  module.exports =  {transporter,nodemailer, setMessage }


 
  

