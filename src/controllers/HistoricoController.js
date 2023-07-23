const HistoricoServices = require('../services/HistoricoService');

const getAllHistorico = async (req,res) => {
    const allHistorico = await HistoricoServices.getAllUsuarios();

    res.status(200).send(allHistorico)
}

module.exports = {
    getAllHistorico
}