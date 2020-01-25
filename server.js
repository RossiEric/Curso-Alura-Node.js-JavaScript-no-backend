/*
arquivo apenas apra criação do servidor
*/

//get em modulo capsula para express customizado 
const app = require('./src/config/custom-express');

//abre porta 3000 para local host
app.listen(3000, function(){
    console.log('servidor rodando http://localhost:3000/');
});

