import { Usuario, Publicacao, Comentario } from './1-class.js';

const alice = new Usuario("Alice", "1990-05-15");
const bob = new Usuario("Bob", "1992-08-20");
const charlie = new Usuario("Charlie", "1988-12-30");

const post1 = alice.criarPublicacao("Olá, mundo!", ["imagem1.jpg"]);
const post2 = bob.criarPublicacao("Meu primeiro post!");

bob.seguir(alice);
charlie.seguir(alice);

const comentario1 = new Comentario(bob, new Date(), "Adorei sua publicação!");
post1.comentar(comentario1);

post2.curtir();
post2.editar("Meu primeiro post editado!");

const comentario2 = new Comentario(charlie, new Date(), "Muito legal, Alice!");
post1.comentar(comentario2);

bob.deixarDeSeguir(alice);
comentario1.remover(post1);

console.log(`Publicação de ${alice.nome}: "${post1.descricao}" com ${post1.curtidas} curtidas e ${post1.comentarios.length} comentários.`);
console.log(`Publicação de ${bob.nome}: "${post2.descricao}" com ${post2.curtidas} curtidas.`);