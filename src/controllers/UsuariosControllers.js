const UsuariosServices = require ("../services/UsuariosServices");

const getAllUsuarios = async (req,res) => {
    const allUsuarios = await UsuariosServices.getAllUsuarios();
    
    res.status(200).send(allUsuarios)
}

const getOneUsuario = async (req,res) => {
    const {idUsuario} = req.params;

    const oneUsuario = await UsuariosServices.getOneUsuario(idUsuario);

    res.status(200).send(oneUsuario);
}

module.exports = {
    getAllUsuarios,
    getOneUsuario
}