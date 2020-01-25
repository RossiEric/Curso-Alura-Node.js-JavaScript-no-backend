/*
arquivo apenas apra criação do servidor
*/

const app = require('./src/config/custom-express');

app.listen(3000, function(){
    console.log('servidor rodando http://localhost:3000/');
});

