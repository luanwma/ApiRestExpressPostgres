const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
//import nodemailer from "nodemailer"
//import SMPTransport  from "nodemailer-smtp-transport"
const SMPTransport = require('nodemailer-smtp-transport')



//const app = require('../server/server')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let transporter = nodemailer.createTransport({
    host: "gmail",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASS // generated ethereal password
    },
  });

  app.post('/contato' , (req, res) =>{
    const {nome, email, assunto, mensagem} = req.body
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: assunto,

        text: `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`
      };


      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.send('Ocorreu um erro no envio da mensagem.');
        } else {
          console.log('Mensagem enviada: ' + info.response);
          res.send('Mensagem enviada com sucesso!');
        }
      });
  })

 

  exports =  {transporter,nodemailer }


 
  

