const mysql = require('./connection');

const getAllAdministrador = async () => {
    // Variable para almacenar el resultado
    let result;
    // Variable para almacenar la query
    let query = 'Select * from administrador';
    // ejecutamos un try catch para ejecutar una función con promesa para poder sacar los datos al servicio 
    try{
        result = await sendQuery(query)
        result = JSON.stringify(result, null, 2)
        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, (err, result) => {
                    if(err){
                        reject(err)
                    } 
                    resolve(result)
                })
            })
        }
    } catch (err) {
        console.log(err)
    }

    return result
}

module.exports = {
    getAllAdministrador
}