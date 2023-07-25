const express = require('express');

const router = express.Router();

const administradorController = require('../../controllers/AdministradorController');

router.get("/", administradorController.getAllAdministrador);
router.get('/:idAdministrador', administradorController.getOneAdministrador);

module.exports = router;