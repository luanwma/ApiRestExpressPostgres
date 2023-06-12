const express= require('express')
const app = express()
const Port = 3000



app.use(express.json())

/*
app.get('/', (req, res) =>{
    res.send('Hello World')
    console.log(    "ola rota principal")
})
*/

//app.get('/')

//middleware Application-level
app.use(function (req, res, next) {
    console.log("Time:", Date.now())
    next()
    })

//middleware error handling
app.use(function ( err , req, res, next) {
    console.error(err.stack)
    res.status(500).send("Algo deu errado!")
    })


// arquivos estáticos 
app.use(express.static("public")) // disponibiliza todos os arquivos da pasta

app.use("/static", express.static("public")) //cria caminho virtual para acessar arquivos

//Rotas
//Os parâmetros são definidos com ‘:’
app.get("/users/:userId/books/:bookId", (req, res) => {}) //req.params para obter os valores

//gerenciadores de rotas
var router = express.Router()
/*
router.get("/",(req, res) =>{})
app.route("/book").get()
*/
    

app.listen(Port, () =>{
    console.log(`Server is running on port ${Port}`)
})