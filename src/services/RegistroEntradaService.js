const RegistroEntradaDB = require('../database/RegistroEntrada');

const getAllRegistrosEntrada = async () => {
    const allRegistrosEntrada = await RegistroEntradaDB.getAllRegistrosEntrada();
    return allRegistrosEntrada;
}

module.exports = {
    getAllRegistrosEntrada
}