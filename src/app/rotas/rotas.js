//DAO / class, com todos os metodos relacionados a livros
const LivroDao = require('../infra/livro-dao');

//declaração do banco de dados
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
        livroDao.lista()
        .then(livros => resp.marko(
            require('../views/livros/lista/lista.marko'),{
                livros: livros
            }
        ))
        .catch(erro => console.log(erro));       
    });

    app.get('/livros/form', function(req, resp) {
        resp.marko(require('../views/livros/form/form.marko'), { livro: {} });
    });

    //rota para post de cadastro de livros
    app.post('/livros', function(req, resp){
        console.log(req.body);

        const livroDao = new LivroDao(db);
        //chama promise
        livroDao.adiciona(req.body)
        //após gravar novo livro, redireciona para /livros
        .then(resp.redirect('/livros')) 
        .catch(erro => console.log(erro));
    });

    //rota para post de edição de livros
    app.put('/livros', function(req, resp){
        console.log(req.body);

        const livroDao = new LivroDao(db);
        //chama promise
        livroDao.atualiza(req.body)
        //após gravar novo livro, redireciona para /livros
        .then(resp.redirect('/livros')) 
        .catch(erro => console.log(erro));
    });

    //rota delete
    //variavel dinamica via express.js usando :id
    app.delete('/livros/:id', function(req, resp){
        const id = req.params.id;
        const livroDao = new LivroDao(db);
        //chama promise para remover
        livroDao.remove(id)
        //após remover livro, devolver status 200 para navegador
        .then(() => resp.status(200).end) 
        .catch(erro => console.log(erro));
    });

    //get editar livros para form
    app.get('/livros/form/:id', function(req, resp) {
        const id = req.params.id;
        const livroDao = new LivroDao(db);
    
        livroDao.buscaPorId(id)
            .then(livro => 
                resp.marko(
                    require('../views/livros/form/form.marko'),
                    { livro: livro }
                )
            )
            .catch(erro => console.log(erro));
    
    });

    
}

