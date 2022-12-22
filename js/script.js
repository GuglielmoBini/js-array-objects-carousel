/*
Consegna:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come ispirandovi alla foto allegata. Se volete cambiare la grafica siete liberi di farlo.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile assieme al suo titolo e testo.

Milestone 2:
Aggiungere il "ciclo infinito" del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

BONUS 1:
Aggiungere le thumbnails (sotto forma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop  del meccanismo di autoplay.

Buon lavoro e buon divertimento!
*/

// -----------------------------------------------------------------------

// importo array

const data = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morales",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// ***** FUNZIONI *****

// creo funzione per creare un immagine e i suoi testi
const createImgText = (image, title, text) => {
  const card = `<img src="${image}" alt="${title}" />
      <div class="caption text-white">
        <h3>${title}</h3>
        <p>${text}</p>
      </div>`;
  return card;
};

// creo funzione per gestire il cambio di index
const changePic = (target) => {
  // rimuovo classe active all'oggetto corrente
  images[currentActiveIndex].classList.remove("active");
  captions[currentActiveIndex].classList.remove("active");

  if (target === "next") {
    // incremento l'indice
    currentActiveIndex++;
    // se sono alla fine, riparto
    if (currentActiveIndex === images.length) currentActiveIndex = 0;
  } else if (target === "prev") {
    // decremento l'indice
    currentActiveIndex--;
    // se sono all'inizio, riparto dalla fine
    if (currentActiveIndex < 0) currentActiveIndex = images.length - 1;
  }

  // aggiungo classe active con index incrementato
  images[currentActiveIndex].classList.add("active");
  captions[currentActiveIndex].classList.add("active");
};

// ***** FASE PREPARATORIA *****
// prendo gli elementi dal DOM
// galleria
const gallery = document.querySelector("#carousel .gallery");
// bottoni
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// ***** ESECUZIONE ESERCIZIO *****

// creo ciclo per stampare le immagini e i testi
let imageElements = "";
data.forEach((game) => {
  imageElements += createImgText(game.image, game.title, game.text);
});
gallery.innerHTML = imageElements;

// recupero le immagini
const images = document.querySelectorAll(".gallery img");
// recupero la caption
const captions = document.querySelectorAll(".gallery .caption");

// setto il primo oggetto come attivo
let currentActiveIndex = 0;
images[currentActiveIndex].classList.add("active");
captions[currentActiveIndex].classList.add("active");

// aggancio evento al next-button
nextButton.addEventListener("click", () => {
  // rimuovo classe active all'oggetto corrente
  changePic("next");
});

// aggancio evento al prev-button
prevButton.addEventListener("click", () => {
  changePic("prev");
});
