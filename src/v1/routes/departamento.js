const express = require('express');

const router = express.Router();

const departamentoController = require('../../controllers/DepartamentoController');

router.get("/", departamentoController.getAllDepartamento);

module.exports = router