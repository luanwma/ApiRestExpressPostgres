const express = require('express')

const router = express.Router()

const userControl = require('../controller/UserControl')
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

router.use(express.json())
router.get('/' , (req, res) =>{
    
    res.render('login')
})
router.get('/login' , (req, res) =>{
    console.log("xxx")
    res.render('login')
})

router.post('/login' , userControl.validaUser)

router.post('/cadastro_usuario', userControl.createUser)

   /*  router.get('/users/:id', (req, res) => {
        const userId = req.params.id;
        if(userId == 1){
            res.render('minhas_receitas');
        }
        
    });
 */
  module.exports = router