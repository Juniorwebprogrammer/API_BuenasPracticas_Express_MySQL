const UsuariosServices = require ("../services/UsuariosServices");

const getAllUsuarios = async (req,res) => {
    const allUsuarios = await UsuariosServices.getAllUsuarios();
    
    res.status(200).send(allUsuarios)
}

module.exports = {
    getAllUsuarios
}