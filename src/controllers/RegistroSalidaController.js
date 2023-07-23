const RegistroSalidaServices = require('../services/RegistroSalidaService');

const getAllRegistroSalida = async (req,res) => {
    const allRegistroSalida = await RegistroSalidaServices.getAllRegistrosSalida();

    res.status(200).send(allRegistroSalida);
}

module.exports = {
    getAllRegistroSalida
}