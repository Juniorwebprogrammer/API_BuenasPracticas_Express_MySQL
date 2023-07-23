const AdministradorDB = require('../database/Administrador');

const getAllAdministrador = async () => {
    const allAdministrador = await AdministradorDB.getAllAdministrador()
    return allAdministrador;
}

module.exports = {
    getAllAdministrador
}