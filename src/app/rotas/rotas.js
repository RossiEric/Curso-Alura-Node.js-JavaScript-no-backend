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
        //responde com html
        resp.marko(
            //
            require('../views/livros/lista/lista.marko'),{
                livros:[
                    {
                        id: 1,
                        titulo: 'Livro 1 lorem ipsum'
                    },
                    {
                        id: 2,
                        titulo: 'Livro 2 lero lero'
                    }
                ]
            }
        );
    });
}

