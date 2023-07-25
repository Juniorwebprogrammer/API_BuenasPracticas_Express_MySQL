const AdministradorServices = require('../services/AdministradorServices');

const getAllAdministrador = async (req,res) => {
    const allAdministrador = await AdministradorServices.getAllAdministrador();

    res.status(200).send(allAdministrador)
}

const getOneAdministrador = async (req,res) => {
    const {idAdministrador} = req.params;
    const oneAdministrador = await AdministradorServices.getOneAdministrador(idAdministrador);
    res.status(200).send(oneAdministrador)
}

module.exports = {
    getAllAdministrador,
    getOneAdministrador
}