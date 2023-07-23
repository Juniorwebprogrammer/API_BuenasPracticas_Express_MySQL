const HiatoricosDB = require('../database/Historico');

const getAllUsuarios = async () => {
    const allHistoricos = await HiatoricosDB.getAllHistoricos()
    return allHistoricos;
}

module.exports = {
    getAllUsuarios
}