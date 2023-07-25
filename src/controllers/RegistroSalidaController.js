const RegistroSalidaServices = require('../services/RegistroSalidaService');

const getAllRegistroSalida = async (req,res) => {
    const allRegistroSalida = await RegistroSalidaServices.getAllRegistrosSalida();

    res.status(200).send(allRegistroSalida);
}

const getOneRegistroSalida = async (req,res) => {
    const {idRegistroSalida} = req.params;

    const oneRegistroSalida = await RegistroSalidaServices.getOneRegistroSalida(idRegistroSalida);

    res.status(200).send(oneRegistroSalida)
}

module.exports = {
    getAllRegistroSalida,
    getOneRegistroSalida
}