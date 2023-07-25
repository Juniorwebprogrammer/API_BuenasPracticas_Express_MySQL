const DepartamentoServices = require('../services/DepartamentoService');

const getAllDepartamento = async (req,res) => {
    const AllDepartamento = await DepartamentoServices.getAllDepartamento();

    res.status(200).send(AllDepartamento);
} 

const getOneDepartamento = async (req,res) => {
    const {idDepartamento} = req.params;
    const oneDepartamento = await DepartamentoServices.getOneDepartamento(idDepartamento);
    res.status(200).send(oneDepartamento)
}

module.exports = {
    getAllDepartamento,
    getOneDepartamento
}