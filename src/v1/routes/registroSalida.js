const express = require('express');

const router = express.Router();

const RegistroSalidaController = require('../../controllers/RegistroSalidaController');

router.get("/", RegistroSalidaController.getAllRegistroSalida);

router.get("/:idRegistroSalida", RegistroSalidaController.getOneRegistroSalida);

router.post("/", RegistroSalidaController.postNewRegistroSalida);

module.exports = router