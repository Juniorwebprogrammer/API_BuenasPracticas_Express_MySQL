const express = require('express');
const morgan = require('morgan');

// Inicialización

const app = express();

const Port = process.env.PORT || 4000;

const v1UsuarioRouter = require("./v1/routes/usuarios");

const v1AdministradorRouter = require('./v1/routes/administrador');

const v1DepartamentoRouter = require('./v1/routes/departamento');

const v1RegistroEntradaRouter = require('./v1/routes/registroEntrada');

const v1RegistroSalidaRouter = require('./v1/routes/registroSalida');

const v1historicoRouter = require('./v1/routes/historico')

// Configuraciones



// Middelwares

app.use(morgan('dev'));

app.use(express.json()); // body-parser

// Routes

app.use('/api/v1/usuarios', v1UsuarioRouter);

app.use('/api/v1/administradores', v1AdministradorRouter);

app.use('/api/v1/departamentos', v1DepartamentoRouter);

app.use('/api/v1/registroEntrada', v1RegistroEntradaRouter);

app.use('/api/v1/registroSalida', v1RegistroSalidaRouter);

app.use('/api/v1/historicos', v1historicoRouter);


// Servidor

app.listen(Port, console.log(`🚀Server on port ${Port}`));