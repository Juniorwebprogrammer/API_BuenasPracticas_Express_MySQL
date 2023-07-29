const RegistroEntradaDB = require('../database/RegistroEntrada');

const getAllRegistrosEntrada = async () => {
    const allRegistrosEntrada = await RegistroEntradaDB.getAllRegistrosEntrada();
    return allRegistrosEntrada;
}

const getOneRegistroEntrada = async (idRegistroEntrada) => {
    const oneRegistroEntrada = await RegistroEntradaDB.getOneRegistroEntrada(idRegistroEntrada);
    return oneRegistroEntrada;
}

const postNewRegistroEntrada = async(newRegistroEntrada) => {
    const registroEntradaInsert = {
        ...newRegistroEntrada
    }

    const postRegistroEntrada = await RegistroEntradaDB.postNewRegistroEntrada(registroEntradaInsert);

    return postRegistroEntrada
}

module.exports = {
    getAllRegistrosEntrada,
    getOneRegistroEntrada,
    postNewRegistroEntrada
}