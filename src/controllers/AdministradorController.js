const AdministradorServices = require('../services/AdministradorServices');

const getAllAdministrador = async (req,res) => {
    const allAdministrador = await AdministradorServices.getAllAdministrador();

    res.status(200).send(allAdministrador)
}

module.exports = {
    getAllAdministrador
}