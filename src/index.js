
//console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
//console.log(data[0]);

// console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
// console.log(data[0]);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function createCard(liCard) {
  const ul = document.querySelector("ul");
  liCard.setAttribute("class", "card");
  ul.appendChild(liCard);
}

function createTitle(pokemonCard, liCard) {
  const title = document.createElement("h2");
  title.innerText = capitalize(pokemonCard.name);
  title.classList.add("card--title");
  liCard.appendChild(title);
}

function createImage(pokemonCard, liCard) {
  const image = document.createElement("img");
  image.src = pokemonCard.sprites.other["official-artwork"].front_default;
  image.setAttribute("width", "256");
  image.classList.add("card--img");
  liCard.appendChild(image);
}

function createBackImage(pokemonCard, liCard) {
  const image2 = document.createElement("img");
  image2.src = pokemonCard.sprites.other["official-artwork"].front_default;
  image2.setAttribute("width", "256");
  image2.classList.add("card--img-back");
  liCard.appendChild(image2);
}

function createCardText(pokemonCard, liCard) {
  const ul = document.createElement("ul");
  ul.classList.add("card--text");
  pokemonCard.stats.forEach((item) => {
    const liStat = document.createElement("li");
    liStat.innerText = `${item.stat.name.toUpperCase()}: ${item.base_stat}`;
    ul.appendChild(liStat);
  });
  liCard.appendChild(ul);
}

function createGameList(pokemonCard, liCard) {
  const ul = document.createElement("ul");
  ul.classList.add("card--text");
  const liGames = document.createElement("li");
  liGames.textContent = "APPEARS IN: ";

  pokemonCard.game_indices.forEach((gameIndex) => {
    liGames.textContent += `${gameIndex.version.name}, `;
    ul.appendChild(liGames);
  });
  liCard.appendChild(ul);
}

data.forEach((pokemonCard) => {
  const liCard = document.createElement("li");
  createCard(liCard);
  createTitle(pokemonCard, liCard);
  createImage(pokemonCard, liCard);
  createBackImage(pokemonCard, liCard);
  createCardText(pokemonCard, liCard);
  createGameList(pokemonCard, liCard);
});

const liCard = document.querySelectorAll(".card");

liCard.forEach((card) => {
  card.addEventListener("click", () => {
    const cardImg = document.querySelectorAll(".card--img");
    for (let i = 0; i < cardImg.length; i++) {
      cardImg[i].classList.toggle("disappear");
    }
  });
});

