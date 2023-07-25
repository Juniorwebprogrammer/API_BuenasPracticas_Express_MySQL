const RegistroEntradaServices = require('../services/RegistroEntradaService');

const getAllRegistroEntrada = async (req,res) => {
    const allRegistroEntrada = await RegistroEntradaServices.getAllRegistrosEntrada();

    res.status(200).send(allRegistroEntrada);
}

const getOneRegistroEntrada = async (req,res) => {
    const {idRegistroEntrada} = req.params;

    const oneRegistroEntrada = await RegistroEntradaServices.getOneRegistroEntrada(idRegistroEntrada);

    res.status(200).send(oneRegistroEntrada);
}

module.exports = {
    getAllRegistroEntrada,
    getOneRegistroEntrada
}