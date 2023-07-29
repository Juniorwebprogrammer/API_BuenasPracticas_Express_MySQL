const UsuariosDB = require('../database/Usuarios');

const getAllUsuarios = async () => {
    const allUsuarios = await UsuariosDB.getAllUsuarios()
    return allUsuarios;
}

const getOneUsuario = async (idUsuario) => {
    const oneUsuario = await UsuariosDB.getOneUsuario(idUsuario);
    return oneUsuario;
}

const postNewUsuario = async(newUsuario) => {
    const UsuarioInsert = {
        ...newUsuario
    }

    const postUsuario = await UsuariosDB.postNewUsuario(UsuarioInsert)

    return postUsuario;
}

module.exports = {
    getAllUsuarios,
    getOneUsuario,
    postNewUsuario
}