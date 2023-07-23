const express = require('express');
const mysql = require('./connection');

const getAllUsuarios = async () => {
    let result;
    let query = 'Select * from usuarios'
    try{
        result = await sendQuery(query)
        result = JSON.stringify(result, null, 2)
        function sendQuery(query){
            return new Promise((resolve, reject) => {
                mysql.query(query, (err, result) => {
                    if(err) {
                        reject(err)
                    }
                    resolve(result)
                })
            })
        }
    } catch (err){
        console.log(err)
    }
    //console.log(result)
    return result
}

module.exports = {
    getAllUsuarios
}