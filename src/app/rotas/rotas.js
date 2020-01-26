const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

//exporta uma função do modulo que pode receber o parametro app
module.exports = (app) => {
    //get para atender rotas
    app.get('/', function(req, resp){
        //responde com html
        resp.send(`
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Casa do Código 1 </h1>
                </body> 
            </html>
        `);
    });

    app.get('/livros', function(req, resp){

        const livroDao = new LivroDao(db);
        //chama promise
        livroDao.Lista()
        .then(livros => resp.marko(
            require('../views/livros/lista/lista.marko'),{
                livros: livros
            }
        ))
        .catch(erro => console.log(erro));       
    });
}

