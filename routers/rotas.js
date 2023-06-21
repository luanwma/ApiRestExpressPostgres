const express = require('express')
const app = express()
const user = require("../src/model/Users")
const schemaJoi = require('../joi/useJoi')
const joi = require('joi')
const router = express.Router()


app.get('/', (req, req, next) =>{

    console.log('abriu rotas')
})
