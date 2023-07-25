const RegistroEntradaDB = require('../database/RegistroEntrada');

const getAllRegistrosEntrada = async () => {
    const allRegistrosEntrada = await RegistroEntradaDB.getAllRegistrosEntrada();
    return allRegistrosEntrada;
}

const getOneRegistroEntrada = async (idRegistroEntrada) => {
    const oneRegistroEntrada = await RegistroEntradaDB.getOneRegistroEntrada(idRegistroEntrada);
    return oneRegistroEntrada;
}

module.exports = {
    getAllRegistrosEntrada,
    getOneRegistroEntrada
}