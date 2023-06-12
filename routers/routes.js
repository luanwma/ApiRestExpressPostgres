const express = require('express')
const controle = require("../controller/controle")
const router = express.Router()

router.route("/").get(controle.firstPage)


router
    .route("/:id")
    .get(controle.findById)
    .put(controle.update)
    .delete(controle.delete)
module.exports = router

