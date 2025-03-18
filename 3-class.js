// musica.js
export class Musica {
    constructor(titulo, artista, duracao, arquivo) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao;
        this.arquivo = arquivo;
        this.reproduzindo = false;
    }

    reproduzir() {
        this.reproduzindo = true;
        console.log(`Reproduzindo: ${this.titulo} - ${this.artista}`);
    }

    pausar() {
        this.reproduzindo = false;
        console.log(`Pausado: ${this.titulo} - ${this.artista}`);
    }
}

export class Artista {
    constructor(nome, foto) {
        this.nome = nome;
        this.foto = foto;
        this.musicas = [];
    }

    listaDeMusicas() {
        return this.musicas.map(musica => musica.titulo);
    }

    adicionarMusica(musica) {
        this.musicas.push(musica);
    }

    removerMusica(musica) {
        const index = this.musicas.indexOf(musica);
        if (index > -1) {
            this.musicas.splice(index, 1);
        }
    }
}

export class Playlist {
    constructor(nome) {
        this.nome = nome;
        this.musicas = [];
        this.musicaAtual = 0;
    }

    adicionarMusica(musica) {
        this.musicas.push(musica);
    }

    removerMusica(musica) {
        const index = this.musicas.indexOf(musica);
        if (index > -1) {
            this.musicas.splice(index, 1);
            if (this.musicaAtual >= index) {
                this.musicaAtual = Math.max(0, this.musicaAtual - 1);
            }
        }
    }

    reproduzir() {
        if (this.musicas.length > 0) {
            this.musicas[this.musicaAtual].reproduzir();
        }
    }

    avancarMusica() {
        if (this.musicaAtual < this.musicas.length - 1) {
            this.musicas[this.musicaAtual].pausar();
            this.musicaAtual++;
            this.reproduzir();
        } else {
            console.log("Você já está na última música.");
        }
    }

    voltarMusica() {
        if (this.musicaAtual > 0) {
            this.musicas[this.musicaAtual].pausar();
            this.musicaAtual--; 
            this.reproduzir();
        } else {
            console.log("Você já está na primeira música.");
        }
    }
}