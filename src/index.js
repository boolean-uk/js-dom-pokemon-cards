const cardsUl = document.querySelector(".cards");

const imageIndices = {}

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
  // Get all front default images
  let images = []
  findAllFrontDefaultImages(cardData, images, cardData.sprites.other["official-artwork"].front_default, cardData.name)

  const imgElement = document.createElement("img");
  imgElement.src = cardData.sprites.other["official-artwork"].front_default;
  imgElement.classList.add("card--img");
  imgElement.width = 256;

  imgElement.addEventListener("click", function() {
    if (imageIndices[cardData.name] + 1 >= images.length) {
      imageIndices[cardData.name] = 0
    } else {
      imageIndices[cardData.name] ++
    }
  
    imgElement.src = images[imageIndices[cardData.name]]

  })
  return imgElement;
}

function findAllFrontDefaultImages(object, images, original, name) {
  for (const key in object) {
      if (typeof object[key] === 'object' && object[key] !== null) {
          findAllFrontDefaultImages(object[key], images, original, name); 
      } else if (key === 'front_default') {
          images.push(object[key]);
          if (object[key] === original) {
            imageIndices[name] = images.length - 1
          }
      }
  }
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
