const express = require('express');

const router = express.Router();

const HistoricoController = require('../../controllers/HistoricoController');

router.get("/", HistoricoController.getAllHistorico);

module.exports = router