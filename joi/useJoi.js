const joi = require('joi')

const schema = joi.object({
    id: joi.number().integer().min(0).required(),
    name: joi.string().min(1).max(30).required(),
    email : joi.string().email()
})

function validarIdEmailSenha(req, res, next){
    const {error, value} =schema.validate(req.query)
    if(error){
        res.error = error.detail[0].message
        return next()
    }
    req.query = value
    next()
}

module.exports = validarIdEmailSenha