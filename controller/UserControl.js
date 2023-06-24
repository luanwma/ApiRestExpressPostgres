const User = require('../src/model/User')
const sequelize = require('../config/database')
//const { where } = require('sequelize')
const jwt = require('jsonwebtoken');
//const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: false }));
require('dotenv').config()
const private_key ='minha_chave'



exports.createUser = async (req, res) =>{
    
    const nome = req.body.nome
    const email = req.body.email
    const password = req.body.password
    const dataNascimento = req.body.birthdate

    console.log("nome "+nome)
    console.log("email "+email)
    console.log("dataNascimento "+dataNascimento)
    

    try{
        const novoUser = await User.create({nome, email, password, dataNascimento})
        res.status(201).json(novoUser)
    }catch(error){
        console.log(error)
        res.status(500).json({error:'Erro ao criar usuario.'})
    }
}

exports.getUserById = async (req, res) =>{
    const {id} = req.params
    try{
        const user = await User.findByPk(id);
        if(user){
            res.json(user)
        }else{
            res.status(404).json({error: 'Usuario nao encontrado'})
        }

    } catch(error){ 
        console.log(error)
        res.status(500).json({error:"Erro interno"}).json({error:'Erro ao encontrar usuario '})
    
    }
}

exports.updateUser = async (req, res) =>{
    const {id} = req.params
    const {nome, email, password, dataNascimento} = req.body
    try{
        const user = await User.findByPk(id)
        if(user){
            user.nome = nome
            user.email = email
            user.password = password
            user.dataNascimento = dataNascimento
            await user.save()
            res.json(user)
            

        } else {
            res.status(404).json({error: 'Usuario nao existe'})
            throw new Error('Usuário não existe')
            
        }
    } catch(error){
        
        console.log(error)
        res.status(500).json({error :'Erro ao encontrar usuario'})
    }
}

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (user) {
        await user.destroy();
        res.json({ message: 'Usuario excluido com sucesso' });
      } else {
        res.status(404).json({ error: 'Usuario nao encontrado.' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro ao excluir o usuario.' });
    }
  };

  exports.validaUser = async (req, res) =>{
    
    const email = req.body.email
    const password  = req.body.password
    try{
        const user =  await User.findOne({where:{email}})
       if(user && user.password === password){ 
            const token = jwt.sign({id:user.id} , private_key, {expiresIn: '1h'} )
            res.json({token})
            
       }else{
        res.status(401).json({error : 'Erro ao fazer login'})
       }
    }catch(error){
        console.log(error)
        return res.status(500).json({error:'Erro ao fazer login'})
    }
  }
  