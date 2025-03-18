import { Musica, Artista, Playlist } from './3-class.js';

const musica1 = new Musica("Tudo Outra Vez", "Belchior", 340, "tudo_outra_vez.mp3");
const musica2 = new Musica("This Is Not America", "Residente", 351, "this_is_not_america.mp3");
const musica3 = new Musica("Onde Estará O Meu Amor", "Maria Bethânia", 333, "onde_estará_o_meu_amor.mp3");

const artista1 = new Artista("Belchior", "belchior.jpg");
artista1.adicionarMusica(musica1);
artista1.adicionarMusica(musica2);

const artista2 = new Artista("Residente", "residente.jpg");
artista2.adicionarMusica(musica3);

const playlist = new Playlist("Minha Playlist");
playlist.adicionarMusica(musica1);
playlist.adicionarMusica(musica2);
playlist.adicionarMusica(musica3);

console.log("Iniciando a playlist:");
playlist.reproduzir();

console.log("Avançando para a próxima música:");
playlist.avancarMusica();

console.log("Pausando a música atual:");
playlist.musicas[playlist.musicaAtual].pausar();

console.log("Voltando para a música anterior:");
playlist.voltarMusica();

console.log("Removendo a segunda música da playlist:");
playlist.removerMusica(musica2);

console.log("Playlist finalizada.");