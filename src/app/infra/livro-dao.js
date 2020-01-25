class LivroDao{

    constructor(db){
        this._db = db;
    }

    Lista(callback){

        this._db.all(
            'SELECT * from livros',
            (erro, resultados) =>
                callback(erro, resultados)            
        )

    };

}

module.exports = LivroDao;