const database = require("../database/config");

function entrar(email, senha){
    console.log(`Acessei o usuarioModel. Function entrar(${email}, ${senha})`);
    const comando = `SELECT * FROM Usuario WHERE email = '${email}' AND senha = '${senha}'`;
    
    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function verificar_curtir(usu){
   const comando = ` select fkusu as "Nome _e_Usuario", fkLivro as "Livro", curtir.fkAutor as "Autor", nome from curtir left join livro on fklivro = idlivro where fkUsu = ${usu};`;
   console.log(comando);
   return database.executar(comando); 
}

function curtir(fkusu, fklivro, fkaut){
    const comando = `insert into curtir (fkusu, fkLivro, fkAutor) values (${fkusu}, ${fklivro}, ${fkaut});`;
    console.log("Executando o comando: " + comando)
    return database.executar(comando);
}

function descurtir(fkusu, fklivro, fkaut){
    console.log(`acessei Acessei o usuarioModel. Function descurtir(${fkusu}, ${fklivro}, ${fkaut})`);
    const comando = `delete from curtir where fkusu = ${fkusu} and fkLivro = ${fklivro} and fkAutor = ${fkaut}; `;
    console.log(`Executando a instrução sql: ${comando}`);
    return database.executar(comando);
}

function cadastrar(nome, usu, email, data, autor_fav, senha){
    console.log(`Acessei o usuarioModel. Function cadastrar(${nome}, ${usu}, ${email}, ${data}, ${autor_fav}, ${senha}`);
    const comando = `INSERT INTO Usuario (nome_completo, nome_usu, autor_fav, email, dataNasc, senha) VALUES ('${nome}', '${usu}', '${autor_fav}', '${email}', '${data}', '${senha}')`;
    
    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function atualizar(nome, nick, email, idUsuario){
    console.log(`Acessei o usuarioModel. Function atualizar(${nome}, ${nick}, ${email})`);
    const comando = `UPDATE Usuario SET nome = '${nome}', nick = '${nick}', email = '${email}' WHERE idUsuario = ${idUsuario}`;
    
    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function sugerir(jogo, categoria, idUsuario){
    console.log(`Acessei o usuarioModel. Function sugerir(${jogo}, ${categoria}, ${idUsuario})`);
    const comando = `INSERT INTO JogoSugerido (nome, categoria, fkUsuario) VALUES ('${jogo}', '${categoria}', ${idUsuario})`;
    
    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function mede(){
    console.log("Acessei o usuarioModel. Function mede");
    const comando = `select livro.nome, count(fklivro) as "quantidade_de_Curtidas"
    from curtir 
    right join livro on fklivro = idlivro
    group by livro.nome
    order by COUNT(fkLivro) desc limit 5;`;

    return database.executar(comando);
}

function mostra(usu){
    console.log("Acessei o usuarioModel. function mostra");
    const comando = `select nome from livro, curtir, usuario where idUsuario = ${usu} and fkusu = idUsuario and fkLivro = idLivro;`;
    return database.executar(comando);
}

module.exports = {
    entrar,
    cadastrar,
    atualizar,
    sugerir,
    verificar_curtir,
    curtir,
    descurtir,
    mede,
    mostra
}