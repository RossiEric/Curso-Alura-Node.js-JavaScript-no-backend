//definindo MARKO para trabalhar com node e express
require('marko/node-require').install;
require('marko/express');

//definide uso de modulo express
const express = require('express');

//chamada da função express para receber objetos
const app = express();

//chamada de body-parser para aplicação
const bodyParser = require('body-parser');

//chamada method-override
const methodOverride = require('method-override');

//definindo arquivos publicos com Middleware e express.js
app.use('/estatico', express.static('src/app/public'))

//definir Middleware do body-parser para 
//receber objetos complexos em json dos forms
app.use(bodyParser.urlencoded({
    extended: true
}));

//method-override, para troca de metods em forms dependendo da entrada de dados na pagina
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}));

//importação modulo de rotas
const rotas = require('../app/rotas/rotas');

//função do modulo que pode receber o parametro app
rotas(app); 

//define o que será exportado pelo modulo
module.exports = app;