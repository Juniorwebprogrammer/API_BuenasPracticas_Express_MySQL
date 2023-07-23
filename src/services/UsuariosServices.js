const UsuairosDB = require('../database/Usuarios');

const getAllUsuarios = async () => {
    const allUsuarios = await UsuairosDB.getAllUsuarios()
    return allUsuarios;
}

module.exports = {
    getAllUsuarios
}