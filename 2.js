import { Livro, Usuario, Biblioteca, Emprestimo } from "./2-class.js";

const biblioteca = new Biblioteca();

const livro1 = new Livro("Amêndoas", "Won-pyung Sohn", 2023);
const livro2 = new Livro("O Alquimista", "Paulo Coelho", 1988);
const livro3 = new Livro("Tudo É Rio", "Carla Madeira", 2014);

biblioteca.addLivro(livro1);
biblioteca.addLivro(livro2);
biblioteca.addLivro(livro3);

const usuario1 = new Usuario("Fernanda");
const usuario2 = new Usuario("Vitória");

biblioteca.addUsuario(usuario1);
biblioteca.addUsuario(usuario2);

const emprestimo1 = new Emprestimo(livro1, usuario1);
biblioteca.addEmprestimo(emprestimo1);

usuario1.livrosEmprestados.push(livro1);

console.log("Livros na Biblioteca:");
biblioteca.listLivros().forEach(livro => {
    console.log(`- ${livro.titulo} (${livro.ano})`);
});

console.log("\nUsuários na Biblioteca:");
biblioteca.listUsuarios().forEach(usuario => {
    console.log(`- ${usuario.usuario}`);
});

console.log("\nEmpréstimos Realizados:");
biblioteca.listEmprestimos().forEach(emprestimo => {
    console.log(`- "${emprestimo.livro.titulo}" para ${emprestimo.usuario.usuario}`);
});

console.log(`\nLivros emprestados por ${usuario1.usuario}:`);
usuario1.livrosEmprestados.forEach(livro => {
    console.log(`- ${livro.titulo}`);
});