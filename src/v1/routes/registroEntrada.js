const express = require('express');

const router = express.Router();

const RegistroEntradaController = require('../../controllers/RegistroEntradaController');

router.get("/", RegistroEntradaController.getAllRegistroEntrada);

module.exports = router