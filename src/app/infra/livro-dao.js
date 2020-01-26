class LivroDao{

    constructor(db){
        this._db = db;
    }

    adiciona(livro){
        return new Promise((resolve, reject) => {
            //db.run executa porem não retorna valores
            this._db.run(`
            INSERT INTO LIVROS (
                    titulo,
                    preco,
                    descricao
                ) values (?, ?, ?)
            `,[
                //ordem das variaveis, mantem para preenchimento dos valores na string
                livro.titulo,
                livro.preco,
                livro.descricao
            ],function (err) {
                if (err) {
                    console.log(err);
                    return reject('Não foi possível adicionar o livro!');
                }

                //caso o cadstro ocorra seu erro, retorna/resolve
                resolve();
            })
        });
    }

    Lista(){
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * from livros',
                (erro, resultados) => {
                    //caso erro
                    if(erro) return reject('Não foi possivel listar!');
                    //sem erro, resolve
                    return resolve(resultados);
                }   
            )
        });
    };
}

module.exports = LivroDao;