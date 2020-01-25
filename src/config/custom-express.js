//definide uso de modulo express
const express = require('express');

//chamada da função express para receber objetos
const app = express();

//importação modulo de rotas
const rotas = require('../app/rotas/rotas');

//função do modulo que pode receber o parametro app
rotas(app); 

//define o que será exportado pelo modulo
module.exports = app;