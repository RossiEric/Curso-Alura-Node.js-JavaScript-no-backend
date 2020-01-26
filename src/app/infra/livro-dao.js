class LivroDao{

    constructor(db){
        this._db = db;
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