
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

 

 

  exports =  {transporter,nodemailer }


 
  

