import { Usuario, Publicacao, Comentario } from './1-class.js';

const fernanda = new Usuario("Fernanda", "2006-10-22");
const vitoria = new Usuario("Vitoria", "1996-10-22");
const joao = new Usuario("Joao", "1988-12-30");

const post1 = fernanda.criarPublicacao("Olá, mundo!", ["imagem1.jpg"]);
const post2 = vitoria.criarPublicacao("Meu primeiro post!");

vitoria.seguir(fernanda);
joao.seguir(fernanda);

const comentario1 = new Comentario(vitoria, new Date(), "Adorei sua publicação!");
post1.comentar(comentario1);

post2.curtir();
post2.editar("Meu primeiro post editado!");

const comentario2 = new Comentario(joao, new Date(), "Muito legal, Fernanda!");
post1.comentar(comentario2);

vitoria.deixarDeSeguir(fernanda);
comentario1.remover(post1);

console.log(`Publicação de ${fernanda.nome}: "${post1.descricao}" com ${post1.curtidas} curtidas e ${post1.comentarios.length} comentários.`);
console.log(`Publicação de ${vitoria.nome}: "${post2.descricao}" com ${post2.curtidas} curtidas.`);