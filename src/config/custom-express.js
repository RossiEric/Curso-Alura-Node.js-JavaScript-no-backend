//definindo MARKO para trabalhar com node e express
require('marko/node-require').install;
require('marko/express');

//definide uso de modulo express
const express = require('express');

//chamada da função express para receber objetos
const app = express();

//chamada de body-parser para aplicação
const bodyParser = require('body-parser');

//definir Middleware do body-parser para 
//receber objetos complexos em json dos forms
app.use(bodyParser.urlencoded({
    extended: true
}));

//importação modulo de rotas
const rotas = require('../app/rotas/rotas');

//função do modulo que pode receber o parametro app
rotas(app); 

//define o que será exportado pelo modulo
module.exports = app;