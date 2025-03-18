export class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
}

export class Usuario {
    constructor(usuario) {
        this.usuario = usuario;
        this.livrosEmprestados = [];
    }
}

export class Emprestimo {
    constructor(livro, usuario) {
        this.livro = livro;
        this.usuario = usuario;
    }
}

export class Biblioteca {
    constructor() {
        this.livros = [];
        this.usuarios = [];
        this.emprestimos = [];
    }

    addLivro(livro) {
        this.livros.push(livro);
    }

    addUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    addEmprestimo(emprestimo) {
        this.emprestimos.push(emprestimo);
    }

    listLivros() {
        return this.livros;
    }

    listUsuarios() {
        return this.usuarios;
    }

    listEmprestimos() {
        return this.emprestimos;
    }
}
