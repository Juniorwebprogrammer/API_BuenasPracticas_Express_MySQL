const RegistroSalidaDB = require('../database/RegistroSalida');

const getAllRegistrosSalida = async () => {
    const allRegistrosSalida = await RegistroSalidaDB.getAllRegistroSalida();
    return allRegistrosSalida;
}

module.exports = {
    getAllRegistrosSalida
}