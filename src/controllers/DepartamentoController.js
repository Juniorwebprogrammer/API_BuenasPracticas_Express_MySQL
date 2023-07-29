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

const postNewDepartamento = async (req,res) => {
    const {body} = req;

    if(
        !body.nombreDepartamento
    ) {
        console.log('no funciona');
        return
    }

    const newDepartamento = {
        nombreDepartamento : body.nombreDepartamento
    }

    const createDepartamento = DepartamentoServices.postNewDepartamento(newDepartamento);

    res.status(201).send(createDepartamento);
}

module.exports = {
    getAllDepartamento,
    getOneDepartamento,
    postNewDepartamento
}