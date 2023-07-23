const DepartamentoDB = require('../database/Departamento');

const getAllDepartamento = async () => {
    const allDepartamento = await DepartamentoDB.getAllDepartamentos()
    return allDepartamento;
}

module.exports = {
    getAllDepartamento
}