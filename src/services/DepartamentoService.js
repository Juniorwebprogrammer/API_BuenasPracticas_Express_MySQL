const DepartamentoDB = require('../database/Departamento');

const getAllDepartamento = async () => {
    const allDepartamento = await DepartamentoDB.getAllDepartamentos()
    return allDepartamento;
}

const getOneDepartamento = async (idDepartamento) => {
    const oneDepartamento = await DepartamentoDB.getOneDepartamento(idDepartamento)
    return oneDepartamento
}

const postNewDepartamento = async(newDepartamento) => {
    const DepartamentoInsert = {
        ...newDepartamento
    }

    const postDepartamento = await DepartamentoDB.postNewDepartamento(DepartamentoInsert)

    return postDepartamento;
}

module.exports = {
    getAllDepartamento,
    getOneDepartamento,
    postNewDepartamento
}