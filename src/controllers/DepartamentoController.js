const DepartamentoServices = require('../services/DepartamentoService');

const getAllDepartamento = async (req,res) => {
    const AllDepartamento = await DepartamentoServices.getAllDepartamento();

    res.status(200).send(AllDepartamento);
} 

module.exports = {
    getAllDepartamento
}