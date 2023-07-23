const express = require('express');

const router = express.Router();

const administradorController = require('../../controllers/AdministradorController');

router.get("/", administradorController.getAllAdministrador);

module.exports = router;