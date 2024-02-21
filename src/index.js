const cardsUl = document.querySelector(".cards");

for (const currentData of data) {
  const cardLi = document.createElement("li");
  cardLi.classList.add("card");

  //H2
  const header = renderHeader(currentData);
  cardLi.appendChild(header);

  //IMAGE
  const imgElement = renderImage(currentData);
  cardLi.appendChild(imgElement);

  //STATS
  const statsUl = renderStats(currentData);
  cardLi.appendChild(statsUl);

  // Append the li element to the ul element
  cardsUl.appendChild(cardLi);
}

function renderHeader(cardData) {
  const header = document.createElement("h2");
  header.classList.add("card--title");
  header.textContent = cardData.name[0].toUpperCase() + cardData.name.slice(1);
  return header;
}

function renderImage(cardData) {
  const imgElement = document.createElement("img");
  imgElement.src = cardData.sprites.other["official-artwork"].front_default;
  imgElement.classList.add("card--img");
  imgElement.width = 256;
  return imgElement;
}

function renderStats(cardData) {
  const statsUl = document.createElement("ul");
  statsUl.classList.add("card--text");

  for (const stat of cardData.stats) {
    const statLi = document.createElement("li");
    statLi.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
    statsUl.appendChild(statLi);
  }

  const gameLi = document.createElement("li");
  gameLi.textContent = "GAMES ▼";
  gameLi.setAttribute('id', `expand ${cardData.name}`)
  const div = document.createElement("div");
  div.classList.add("expandable");
  div.setAttribute("id", `gameList ${cardData.name}`);
  const gameUl = renderGames(cardData);

  gameLi.addEventListener("click", expandCollapseList(cardData));

  div.appendChild(gameUl);
  gameLi.appendChild(div);
  statsUl.appendChild(gameLi);

  return statsUl;
}

function expandCollapseList(cardData) {
    return function () {
        var gameList = document.getElementById("gameList " + cardData.name);
        var expandable = document.getElementById("expand " + cardData.name);

        if (gameList.style.display === "block") {
            gameList.style.display = "none";
            expandable.textContent = 'GAMES ▼'
        } else {
            gameList.style.display = "block";
            expandable.textContent = 'GAMES ▲'
        }
        expandable.appendChild(gameList)

    };
}

function renderGames(cardData) {
  const gamesUl = document.createElement("ul");
  gamesUl.classList.add("card--text");

  for (const game of cardData.game_indices) {
    const gameLi = document.createElement("li");
    gameLi.textContent = game.version.name;
    gameLi.style.listStyleType = "none";
    gamesUl.appendChild(gameLi);
  }
  return gamesUl;
}
