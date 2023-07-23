const mysql = require('./connection');

const getAllRegistroSalida = async () => {
    let result;

    let query = "Select * from registrosalida";

    try {
        
        result = await sendQuery(query);
        result = JSON.stringify(result, null, 2);
        function sendQuery(query) {
            return new Promise((resolve, reject) => {
                mysql.query(query, (err, result) => {
                    if(err) {
                        resject(err);
                    } else {
                        resolve(result)
                    }
                })
            })
        }

    } catch (error) {
        console.log(error)
    }

    return result
    
}

module.exports = {
    getAllRegistroSalida
}