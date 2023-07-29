const RegistroSalidaDB = require('../database/RegistroSalida');

const getAllRegistrosSalida = async () => {
    const allRegistrosSalida = await RegistroSalidaDB.getAllRegistroSalida();
    return allRegistrosSalida;
}

const getOneRegistroSalida = async (idRegistroSalida) => {
    const oneRegistroSalida = await RegistroSalidaDB.getOneRegistroSalida(idRegistroSalida);

    return oneRegistroSalida;
}

const postNewRegistroSalida = async(newRegistroSalida) => {
    const RegistroSalidaInsert = {
        ...newRegistroSalida
    };

    const postRegistroSalida = await RegistroSalidaDB.postNewRegistroSalida(RegistroSalidaInsert);

    return(postRegistroSalida);
}

module.exports = {
    getAllRegistrosSalida,
    getOneRegistroSalida,
    postNewRegistroSalida
}