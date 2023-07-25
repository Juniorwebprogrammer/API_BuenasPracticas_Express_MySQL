const UsuariosDB = require('../database/Usuarios');

const getAllUsuarios = async () => {
    const allUsuarios = await UsuariosDB.getAllUsuarios()
    return allUsuarios;
}

const getOneUsuario = async (idUsuario) => {
    const oneUsuario = await UsuariosDB.getOneUsuario(idUsuario);
    return oneUsuario;
}

module.exports = {
    getAllUsuarios,
    getOneUsuario
}