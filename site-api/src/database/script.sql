create database goreads;

use goreads;

create table usuario(
idUsuario int primary key auto_increment,
nome_completo varchar(45),
nome_usu varchar(45),
 autor_fav varchar(45),
 email varchar(45) check (email like '%@%'),
 dataNasc date,
 senha varchar(14)
 )auto_increment= 10;
 
 create table autor(
 idautor int primary key auto_increment,
 nome varchar(45),
 dataNasc date,
 pais varchar(45),
 qtd_obras int)auto_increment= 1000;
 
 create table livro(
 idLivro int,
 fkautor int,
 foreign key(fkautor) references autor(idautor),
 primary key(idLivro, fkautor),
 nome varchar(100),
 editora varchar(45),
 dataLancamento date,
 qtd_pag int
 );
 
 create table curtir(
 fkusu int,
 foreign key(fkusu) references usuario(idUsuario),
 fkLivro int,
 foreign key(fkLivro) references livro(idLivro),
 fkAutor int,
 foreign key(fkautor) references autor(idAutor),
 primary key(fkusu, fkLivro, fkAutor)
 );
 
 
 insert into autor value (Null, 'Rick Riordan', '1964-06-05', 'EUA', 36),
						 (Null, 'Suzanne Collins', '1962-08-10', 'EUA', 12),
                         (Null, 'Taylor Jenkins Reid', '1983-12-20', 'EUA', 8),
                         (Null, 'Babi Dewet', '1986-12-30', 'Brasil', 10);
                         
insert into livro value (1, 1000, 'Ladrão de Raios', 'Intrinseca', '2005-06-28', 400),
                         (2, 1000, 'Mar de Monstros', 'Intrinseca', '2006-04-01', 304),
                         (3, 1000, 'A maldição do Titã', 'Intrinseca', '2007-04-11', 336),
                         (4, 1000, 'A batalha do Labirinto', 'Intrinseca', '2008-05-08', 392),
                         (5, 1000, 'O Último Olimpiano', 'Intrinseca', '2009-05-05', 384),
                         (6, 1001, 'Jogos Vorazes', 'Rocco', '2008-09-14', 400),
                         (7, 1001, 'Em chamas', 'Rocco', '2009-09-01', 416),
                         (8, 1001, 'A esperança', 'Rocco', '2010-08-24', 424),
                         (9, 1001, 'A cantiga dos Passaros e das Serpentes', 'Rocco', '2020-05-19', 572),
                         (10, 1002, 'Daisy Jones & the Six', 'Paralela', '2019-06-10', 360),
                         (11, 1002, 'Os sete maridos de evelyn Hugo', 'Paralela', '2019-10-21', 360),
                         (12, 1002, 'Amor(es) Verdadeiro(s)', 'Paralela', '2016-06-07', 296),
                         (13, 1002, 'Em outra vida, Talvez?', 'Record', '2015-07-07', 322),
                         (14, 1003, 'Sábado a Noite', 'Generale', '2012-06-01', 344),
                         (15, 1003, 'Dos Bailes Para a Fama', 'Generale', '2013-08-01', 400),
                         (16, 1003, 'Com amor e Música', 'Generale', '2014-11-22', 304),
                         (17, 1003, 'Sonata em punk rock', 'Gutenberg', '2016-08-25', 400),
                         (18, 1003, 'Allegro em Hip-Hop', 'Gutenberg', '2018-08-10', 304);
                         
                         
select * from usuario;