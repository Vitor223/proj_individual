const usuarioModel = require("../models/usuarioModel");

function entrar(req, res){
    const email = req.body.emailServer;
    const senha = req.body.senhaServer;

    if(email == undefined){
        res.status(400).send("Preencha o seu e-mail corretamente!");
    }
    else if(senha == undefined){
        res.status(400).send("Preencha a sua senha corretamente!");
    }
    else{
        usuarioModel.entrar(email, senha)
        .then((resultado) => {
            console.log(`Resultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`);

            if(resultado.length == 1){
                console.log(resultado);
                res.json(resultado[0]);
            }
            else if(resultado.length == 0){
                res.status(403).send("E-mail e/ou senha inválido(s)");
            }
            else{
                res.status(403).send("Mais de um usuário com o mesmo login e senha!");
            }
        })
        .catch((erro) =>{
            console.log(erro);
            console.log(`Houve um erro ao realizar o login! Erro: ${erro.sqlMessage}`);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

function cadastrar(req, res){
    const nome = req.body.nomeServer;
    const usu = req.body.usuarioServer;
    const email = req.body.emailServer;
    const data = req.body.dataServer;
    const autor_fav = req.body.autorServer;
    const senha = req.body.senhaServer;

    if(email == undefined){
        res.status(400).send("Preencha o seu e-mail corretamente!");
    }
    else if(senha == undefined){
        res.status(400).send("Preencha a sua senha corretamente!");
    }
    else if(nome == undefined){
        res.status(400).send("Preencha o seu nome corretamente!");
    }

    else if(data == undefined){
        res.status(400).send("Preencha sua data de nascimento corretamente");
    }

    else if(autor_fav == undefined){
        res.status(400).send("Preencha o campo de seu autor favorito corretamente");
    }

    else if(usu == undefined){
        res.status(400).send("Preencha o seu nome de Usuario corretamente!");
    }
    else{
        usuarioModel.cadastrar(nome, usu, email, data, autor_fav, senha)
        .then((resultado) => {
            res.json(resultado);
        })
        .catch((erro) =>{
            console.log(erro);
            console.log(`Houve um erro ao realizar o cadastro! Erro: ${erro.sqlMessage}`);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

function atualizar(req, res){
    const nome = req.body.nomeServer;
    const nick = req.body.nickServer;
    const email = req.body.emailServer;
    const idUsuario = req.body.idUsuarioServer;

    if(email == undefined){
        res.status(400).send("Preencha o seu e-mail corretamente!");
    }
    else if(nome == undefined){
        res.status(400).send("Preencha o seu nome corretamente!");
    }
    else if(nick == undefined){
        res.status(400).send("Preencha o seu nick corretamente!");
    }
    else if(idUsuario == undefined){
        res.status(400).send("Usuário não encontrado, faça o login novamente!");
    }
    else{
        usuarioModel.atualizar(nome, nick, email, idUsuario)
        .then((resultado) => {
            res.json(resultado);
        })
        .catch((erro) =>{
            console.log(erro);
            console.log(`Houve um erro ao realizar a alteração do usuário! Erro: ${erro.sqlMessage}`);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

function sugerir(req, res){
    const jogo = req.body.jogoServer;
    const categoria = req.body.categoriaServer;
    const idUsuario = req.body.idUsuarioServer;

    if(jogo == undefined){
        res.status(400).send("Preencha o nome do jogo corretamente!");
    }
    else if(categoria == undefined){
        res.status(400).send("Preencha a categoria corretamente!");
    }
    else if(idUsuario == undefined){
        res.status(400).send("Usuário não encontrado, faça o login novamente!");
    }
    else{
        usuarioModel.sugerir(jogo, categoria, idUsuario)
        .then((resultado) => {
            res.json(resultado);
        })
        .catch((erro) =>{
            console.log(erro);
            console.log(`Houve um erro ao realizar a sugestão de jogo! Erro: ${erro.sqlMessage}`);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

function verificar_curtir(req, res){
    const usu = req.query.idUsu;
    
    if(usu == undefined)
    {
        res.status(400).send("Id do usuario não encontrado");
    }

    else
    {
        usuarioModel.verificar_curtir(usu)
        .then((resultado) => {
            res.json(resultado);
        })
        .catch((erro) =>{
            console.log(erro);
            console.log(`Houve um erro ao realizar a verificação Erro: ${erro.sqlMessage}`);
            res.status(500).json(erro.sqlMessage);
        });
    }

   
}

function curtir(req,res){
    const fkusu = req.body.fkUsu;
    const fklivro = req.body.fkLivro;
    const fkaut = req.body.fkAut;
    
    usuarioModel.curtir(fkusu, fklivro, fkaut)
    .then((resultado) => {
        res.json(resultado);
    })
    .catch((erro) =>{
        console.log(erro);
        console.log(`Houve um erro ao realizar a curtida Erro: ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage);
    });

}

function descurtir(req,res){
    const fkusu = req.body.fkUsu;
    const fklivro = req.body.fkLivro;
    const fkaut = req.body.fkAut;

    usuarioModel.descurtir(fkusu, fklivro, fkaut)
    .then((resultado) => {
        res.json(resultado);
    })
    .catch((erro) =>{
        console.log(erro);
        console.log(`Houve um erro ao realizar ao descurtir Erro: ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage);
    });
}

function mede(req, res){
 
    usuarioModel.mede()
    .then((resultado) => {
        res.json(resultado);
    })
    .catch((erro) =>{
        console.log(erro);
        console.log(`Houve um erro ao ranquear Erro: ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage);
    });

}

function mostra(req, res){
    const usu = req.query.idusu;

    if(usu == undefined)
    {
        res.status(400).send("Id do usuario não encontrado");
    }
    usuarioModel.mostra(usu)
    .then((resultado) => {
        res.json(resultado);
    })
    .catch((erro) =>{
        console.log(erro);
        console.log(`Houve um erro ao mostrar Erro: ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage);
    });
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