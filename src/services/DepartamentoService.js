const DepartamentoDB = require('../database/Departamento');

const getAllDepartamento = async () => {
    const allDepartamento = await DepartamentoDB.getAllDepartamentos()
    return allDepartamento;
}

const getOneDepartamento = async (idDepartamento) => {
    const oneDepartamento = await DepartamentoDB.getOneDepartamento(idDepartamento)
    return oneDepartamento
}

module.exports = {
    getAllDepartamento,
    getOneDepartamento
}