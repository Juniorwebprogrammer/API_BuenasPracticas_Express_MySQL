const RegistroEntradaServices = require('../services/RegistroEntradaService');

const getAllRegistroEntrada = async (req,res) => {
    const allRegistroEntrada = await RegistroEntradaServices.getAllRegistrosEntrada();

    res.status(200).send(allRegistroEntrada);
}

module.exports = {
    getAllRegistroEntrada
}