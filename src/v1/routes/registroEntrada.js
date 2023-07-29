const express = require('express');

const router = express.Router();

const RegistroEntradaController = require('../../controllers/RegistroEntradaController');

router.get("/", RegistroEntradaController.getAllRegistroEntrada);

router.get("/:idRegistroEntrada", RegistroEntradaController.getOneRegistroEntrada);

router.post("/", RegistroEntradaController.postNewRegistroEntrada);

module.exports = router