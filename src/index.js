console.log(data);

const cards = document.createElement("ul");
cards.className = "cards";
for (let i = 0; i < data.length; i++) {
  const card = renderCard(data[i]);
  cards.appendChild(card);
}
document.body.appendChild(cards);

function renderCard(data) {
  const container = document.createElement("li");
  container.classList.add("card");

  const title = document.createElement("h2");
  title.innerText = capitalizeFirstLetter(data["name"]);
  title.setAttribute("class", "card--title");

  container.appendChild(title);
  container.appendChild(getPokemonImage(data["sprites"]["front_default"]));
  container.appendChild(getPokemonStats(data["stats"]));
  container.appendChild(getGamesAppearedIn(data["game_indices"]));
  return container;
}

function getPokemonImage(image) {
  const img = document.createElement("img");
  img.width = 256;
  img.className = "card--img";
  img.src = image;
  img.alt = "pokemon-image";
  return img;
}

function getPokemonStats(statsData) {
  const stats = document.createElement("ul");
  stats.className = "card--text";
  for (let i = 0; i < statsData.length; i++) {
    const stat = statsData[i];
    const name = stat["stat"]["name"];
    const baseStat = stat["base_stat"];
    const listStat = document.createElement("li");
    listStat.innerText = `${name.toUpperCase()}: ${baseStat}`;
    stats.appendChild(listStat);
  }
  return stats;
}

function getGamesAppearedIn(games) {
  const container = document.createElement("ul");
  container.classList.add("card--text");

  const subtitle = document.createElement("h3");
  subtitle.innerText = "Appears in these games:";

  container.appendChild(subtitle);

  for (let i = 0; i < games.length; i++) {
    const game = document.createElement("li");
    game.innerText = capitalizeFirstLetter(games[i]["version"]["name"]);
    container.appendChild(game);
  }

  return container;
}

function capitalizeFirstLetter(word) {
  return word[0].toUpperCase() + word.slice(1);
}
