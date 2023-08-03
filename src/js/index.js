function inicio() {
    window.scrollTo({ top: 0, behavior: "smooth" })
}

const imgsTog = [
    "./src/imgs/fantasia/lamina-assassina.png",
    "./src/imgs/fantasia/trono-vidro.png",
    "./src/imgs/fantasia/coroa-meia-noite.png",
    "./src/imgs/fantasia/herdeira-fogo.png",
    "./src/imgs/fantasia/rainha-sombras.png",
    "./src/imgs/fantasia/imperio-tempestades.png",
    "./src/imgs/fantasia/torre-alvorecer.png",
    "./src/imgs/fantasia/reino-cinzas.png"
];
const boxTog = document.querySelector('.trono-vidro')
for (let i = 0; i < imgsTog.length; i++) {
    boxTog.innerHTML += `<img class="imgs" src="${imgsTog[i]}" alt="Livro Vol.${i + 1} da saga literária Trono de Vidro.">`
}

const imgsAcotar = [
    "./src/imgs/fantasia/corte-espinhos-rosas.png",
    "./src/imgs/fantasia/corte-nevoa-furia.png",
    "./src/imgs/fantasia/corte-asas-ruinas.png",
    "./src/imgs/fantasia/corte-gelo-estrelas.png",
    "./src/imgs/fantasia/corte-chamas-prateadas.png"
];
const boxAcotar = document.querySelector('.acotar')
for (let i = 0; i < imgsAcotar.length; i++) {
    boxAcotar.innerHTML += `<img class="imgs" src="${imgsAcotar[i]}" alt="Livro Vol.${i + 1} da saga literária Corte de Espinhos e Rosas - ACOTAR.">`
}

const imgsShatter = [
    "./src/imgs/fantasia/estilhaca-me.jpg",
    "./src/imgs/fantasia/liberta-me.jpg",
    "./src/imgs/fantasia/incendeia-me.jpg",
    "./src/imgs/fantasia/restaura-me.jpg",
    "./src/imgs/fantasia/desafia-me.jpg",
    "./src/imgs/fantasia/imagina-me.jpg",
    "./src/imgs/fantasia/unifica-me.png",
    "./src/imgs/fantasia/decifra-me.png",
    "./src/imgs/fantasia/aceita-me.png"
]
const boxShatter = document.querySelector('.shatter')
for (let i = 0; i < imgsShatter.length; i++) {
    boxShatter.innerHTML += `<img class="imgs" src="${imgsShatter[i]}" alt="Livro Vol.${i + 1} da saga literária Estilhaça-Me.">`
}

const imgsPovoAr = [
    "./src/imgs/fantasia/principe-cruel.png",
    "./src/imgs/fantasia/rei-perverso.png",
    "./src/imgs/fantasia/rainha-nada.png"
]
const boxPovoAr = document.querySelector('.povo-ar')
for (let i = 0; i < imgsPovoAr.length; i++) {
    boxPovoAr.innerHTML += `<img class="imgs" src="${imgsPovoAr[i]}" alt="Livro Vol.${i + 1} da saga literária O Povo do Ar.">`
}

const imgsHarryPotter = [
    "./src/imgs/fantasia/hp-pedra-filosofal.jpg",
    "./src/imgs/fantasia/hp-camara-secreta.jpg",
    "./src/imgs/fantasia/hp-prisioneiro-azkaban.jpg",
    "./src/imgs/fantasia/hp-calice-fogo.jpg",
    "./src/imgs/fantasia/hp-ordem-fenix.jpg",
    "./src/imgs/fantasia/hp-enigma-principe.jpg",
    "./src/imgs/fantasia/hp-reliquias-morte.jpg",
    "./src/imgs/fantasia/hp-crianca-amaldicoada.jpg"
]
const boxHarryPotter = document.querySelector('.harry-potter')
for (let i = 0; i < imgsHarryPotter.length; i++) {
    boxHarryPotter.innerHTML += `<img class="imgs" src="${imgsHarryPotter[i]}" alt="Livro Vol.${i + 1} da saga literária Harry Potter.">`
}

const imgsBridgertons = [
    "./src/imgs/romance/bridgertons1.jpg",
    "./src/imgs/romance/bridgertons2.jpg",
    "./src/imgs/romance/bridgertons3.jpg",
    "./src/imgs/romance/bridgertons4.jpg",
    "./src/imgs/romance/bridgertons5.jpg",
    "./src/imgs/romance/bridgertons6.jpg",
    "./src/imgs/romance/bridgertons7.jpg",
    "./src/imgs/romance/bridgertons8.jpg",
    "./src/imgs/romance/bridgertons9.jpg",
    "./src/imgs/romance/bridgertons10.jpg",
    "./src/imgs/romance/bridgertons11.jpg",
    "./src/imgs/romance/bridgertons12.jpg"
]
const boxBridgertons = document.querySelector('.bridgertons')
for (let i = 0; i < imgsBridgertons.length; i++) {
    boxBridgertons.innerHTML += `<img class="imgs" src="${imgsBridgertons[i]}" alt="Livro Vol.${i + 1} da saga literária Os Bridgertons.">`
}

const imgsSpindleCove = [
    "./src/imgs/romance/noite-entregar.jpg",
    "./src/imgs/romance/presente-inesperado.jpg",
    "./src/imgs/romance/semana-perder.jpg",
    "./src/imgs/romance/dama-meia-noite.jpg",
    "./src/imgs/romance/bela-ferreiro.jpg",
    "./src/imgs/romance/duquesa-qualquer.jpg",
    "./src/imgs/romance/chance-amor.jpg",
    "./src/imgs/romance/livrar-escandalo.jpg"
]
const boxSpindleCove = document.querySelector('.spindle-cove')
for (let i = 0; i < imgsSpindleCove.length; i++) {
    boxSpindleCove.innerHTML += `<img class="imgs" src="${imgsSpindleCove[i]}" alt="Livro Vol.${i + 1} da saga literária Spindle Cove.">`
}

const imgsAmoresImprovaveis = [
    "./src/imgs/romance/acordo.jpg",
    "./src/imgs/romance/erro.jpg",
    "./src/imgs/romance/jogo.jpg",
    "./src/imgs/romance/conquista.jpg",
    "./src/imgs/romance/legado.jpg"
]
const boxAmoresImprovaveis = document.querySelector('.amores-improvaveis')
for (let i = 0; i < imgsAmoresImprovaveis.length; i++) {
    boxAmoresImprovaveis.innerHTML += `<img class="imgs" src="${imgsAmoresImprovaveis[i]}" alt="Livro Vol.${i + 1} da saga literária Amores Improváveis.">`
}

const imgsLivrosUnicos = [
    "dom-casmurro",
    "a-hipotese-do-amor",
    "mil-beijos-de-garoto",
    "o-pequeno-principe",
    "vermelho-branco-sangue-azul"
]
const boxLivrosUnicos = document.querySelector('.livros-unicos')
for (let i = 0; i < imgsLivrosUnicos.length; i++) {
    boxLivrosUnicos.innerHTML += `<img class="imgs" src="./src/imgs/livros-unicos/${imgsLivrosUnicos[i]}.jpg" alt="Livro: ${imgsLivrosUnicos[i]}.">`
}