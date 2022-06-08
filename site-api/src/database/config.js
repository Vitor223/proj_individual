const mysql = require("mysql2");

const mySqlConfig = {
    host: 'localhost',
    user: 'pam',
    database: 'goreads',
    password: 'pao.de.queijo',
    port: 3306
}

function executar(comando){
    return new Promise(function (resolve, reject){
        const conexao = mysql.createConnection(mySqlConfig);
        conexao.connect();
        conexao.query(comando, function(erro, resultados){
            conexao.end();
            if(erro){
                reject(erro);
            }
            resolve(resultados);
        });
        conexao.on('error', function(erro){
            return ("Erro no MySQL (local): ", erro.sqlMessage);
        });
    });
}

module.exports = {
    executar
}