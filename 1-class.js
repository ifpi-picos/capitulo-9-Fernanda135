export class Usuario {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.seguidores = [];
        this.seguindo = []; 
        this.publicacoes = [];
    }

    criarPublicacao(texto, midia = []) {
        const publicacao = new Publicacao(this, new Date(), texto, midia);
        this.publicacoes.push(publicacao); 
        return publicacao;
    }

    seguir(usuario) {
        if (!this.seguindo.includes(usuario)) {
            this.seguindo.push(usuario);
            usuario.seguidores.push(this);
            console.log(`${this.nome} agora segue ${usuario.nome}.`);
        }
    }

    deixarDeSeguir(usuario) {
        this._removerSeguindo(usuario);
        usuario._removerSeguidor(this);
        console.log(`${this.nome} deixou de seguir ${usuario.nome}.`);
    }

    _removerSeguindo(usuario) {
        this.seguindo = this.seguindo.filter(u => u !== usuario);
    }

    _removerSeguidor(usuario) {
        this.seguidores = this.seguidores.filter(u => u !== usuario);
    }
}

export class Publicacao {
    constructor(usuario, data, descricao, midia = []) {
        this.usuario = usuario;
        this.data = data;
        this.descricao = descricao;
        this.midia = midia;
        this.curtidas = 0;
        this.comentarios = [];
    }

    editar(novoTexto, novaMidia) {
        this.descricao = novoTexto; 
        this.midia = novaMidia;
        console.log(`Publicação editada: "${this.descricao}"`);
    }

    remover() {
        this.usuario.publicacoes = this.usuario.publicacoes.filter(p => p !== this);
        console.log(`Publicação removida: "${this.descricao}"`);
    }

    curtir() {
        this.curtidas++;
        console.log(`A publicação de ${this.usuario.nome} agora tem ${this.curtidas} curtidas.`);
    }

    descurtir() {
        if (this.curtidas > 0) {
            this.curtidas--;
            console.log(`A publicação de ${this.usuario.nome} agora tem ${this.curtidas} curtidas.`);
        }
    }

    comentar(comentario) {
        this.comentarios.push(comentario);
        console.log(`Comentário adicionado: "${comentario.texto}" por ${comentario.usuario.nome}`);
    }
}

export class Comentario {
    constructor(usuario, data, texto) {
        this.usuario = usuario;
        this.data = data;
        this.texto = texto;
    }

    editar(novoTexto) {
        this.texto = novoTexto;
        console.log(`Comentário editado: "${this.texto}"`);
    }

    remover(publicacao) {
        publicacao.comentarios = publicacao.comentarios.filter(c => c !== this);
        console.log(`Comentário removido: "${this.texto}"`);
    }
}
