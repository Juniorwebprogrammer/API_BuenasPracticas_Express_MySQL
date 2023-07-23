const express = require('express')

const router = express.Router()

const usauriosController = require('../../controllers/UsuariosControllers');

router.get("/", usauriosController.getAllUsuarios);

module.exports = router;