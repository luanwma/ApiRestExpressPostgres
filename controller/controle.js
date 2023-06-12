const UserSequelize = require("../src/model/UserSequelize")

module.exports = {
    async all(req, res) {
        try{
            const users = await UserSequelize.findAll();
            res.status(200).json(users)

        }catch(error){
            res.status(400).send(error)
        }
    },
    async create(req, res){
        try {
            const {name, email} = req.body
            const id = req.params.id
            const user = await UserSequelize.findOne({where:{id}})
            if(!user){
                return res.status(400).send('User not found')
            }
            user.name = name
            user.email = email

            await user.save()
            res.status(201).json("user atualizado")

        } catch (error) {
            res.status(400).send(error)
        }
    },async update(req, res){
        try {
            await UserSequelize.create(req.body)
            res.status(200).json("user inserido")
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async findById(req, res){
        try {
            const id = req.params.id
            const user = await UserSequelize.findOne({where:{id}})  
            if(!user){
               return res.status(400).json("User not Found")
            }
            res.status(200).json(user)
            } catch (error) {
                res.status(400).send(error)
            }

    },
    async delete(req, res){
        try {
            const id = req.params.id
            const user = await UserSequelize.destroy({where:{id}})
            if(!user){
                return res.status(400).json("User not Found")
            }
            res.status(200).json("User deletado")

        }catch(error){
            res.status(400).send(error)
        }
    },
    async firstPage(req , res){
        res.send('<h1>Hello World</h1>')
    }
}