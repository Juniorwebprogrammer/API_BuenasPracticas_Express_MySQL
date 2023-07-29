const express = require('express')

const router = express.Router()

const usuariosController = require('../../controllers/UsuariosControllers');

router.get("/", usuariosController.getAllUsuarios);
router.get("/:idUsuario", usuariosController.getOneUsuario);
router.post("/", usuariosController.postNewUsuario);

module.exports = router;