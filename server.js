//definide uso de modulo express
const express = require('express');

//chamada da função express para receber objetos
const app = express();

app.listen(3000, function(){
    console.log('servidor rodando http://localhost:3000/');
});

//get para atender rotas
app.get('/', function(req, resp){
    //responde com html
    resp.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Casa do Código </h1>
            </body> 
        </html>
    `);
});

app.get('/livros', function(req, resp){
    //responde com html
    resp.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Lista livros </h1>
            </body> 
        </html>
    `);
});