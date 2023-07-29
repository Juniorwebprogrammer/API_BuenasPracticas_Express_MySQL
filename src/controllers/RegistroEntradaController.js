const RegistroEntradaServices = require('../services/RegistroEntradaService');

const getAllRegistroEntrada = async (req,res) => {
    const allRegistroEntrada = await RegistroEntradaServices.getAllRegistrosEntrada();

    res.status(200).send(allRegistroEntrada);
}

const getOneRegistroEntrada = async (req,res) => {
    const {idRegistroEntrada} = req.params;

    const oneRegistroEntrada = await RegistroEntradaServices.getOneRegistroEntrada(idRegistroEntrada);

    res.status(200).send(oneRegistroEntrada);
}

const postNewRegistroEntrada = async (req,res) => {
    const {body} = req;

    if (
        !body.fk_registroEntrada_Usuarios
    ) {
        console.log("Los datos introducidos no son los correctos")
        return
    }

    const newRegistroEntrada = {
        fk_registroEntrada_Usuarios : body.fk_registroEntrada_Usuarios
    };

    const createNewRegistroEntrada = RegistroEntradaServices.postNewRegistroEntrada(newRegistroEntrada);

    res.status(201).send(createNewRegistroEntrada);
}

module.exports = {
    getAllRegistroEntrada,
    getOneRegistroEntrada,
    postNewRegistroEntrada
}