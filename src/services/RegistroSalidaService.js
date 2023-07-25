const RegistroSalidaDB = require('../database/RegistroSalida');

const getAllRegistrosSalida = async () => {
    const allRegistrosSalida = await RegistroSalidaDB.getAllRegistroSalida();
    return allRegistrosSalida;
}

const getOneRegistroSalida = async (idRegistroSalida) => {
    const oneRegistroSalida = await RegistroSalidaDB.getOneRegistroSalida(idRegistroSalida);

    return oneRegistroSalida;
}

module.exports = {
    getAllRegistrosSalida,
    getOneRegistroSalida
}