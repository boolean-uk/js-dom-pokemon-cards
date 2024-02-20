import { flattenObj } from "./slideshowUtil.js";

const cards = document.createElement("ul");
cards.className = "cards";
for (let i = 0; i < data.length; i++) {
  const card = renderCard(data[i]);
  cards.appendChild(card);
}
document.body.appendChild(cards);

/**
 * Returns a card element with a title, image, pokemon stats, and
 * the games they have appeared in.
 * @param {Object} data
 * @returns A card HTML element.
 */
function renderCard(data) {
  const container = document.createElement("li");
  container.classList.add("card");

  const title = document.createElement("h2");
  title.innerText = capitalizeFirstLetter(data["name"]);
  title.setAttribute("class", "card--title");

  container.appendChild(title);
  container.appendChild(getPokemonImage(data["sprites"]));
  container.appendChild(getPokemonStats(data["stats"]));
  container.appendChild(getGamesAppearedIn(data["game_indices"]));
  return container;
}

/**
 * Slides through a list of pictures for a given image element.
 * @param {HTMLImageElement} imgElement
 * @param {Object} images
 * @param {Number} index
 */
function slidePokemonImage(imgElement, images, index) {
  imgElement.src = images[index];
}

/**
 * Get an HTMLImageElement with the specified images bound to it.
 * @param {Object} images An object with different URLs to images.
 * @returns An HTMLImageElement with the source set as a pokemon image.
 */
function getPokemonImage(images) {
  let sprites = flattenObj(images);
  let index = 0;
  sprites = Object.values(sprites).filter((sprite) => sprite !== null);
  const img = document.createElement("img");
  img.width = 256;
  img.className = "card--img";
  img.src = sprites[2];
  img.alt = "pokemon-image";
  img.onclick = () => {
    index = (index + 1) % (sprites.length - 1);
    slidePokemonImage(img, sprites, index);
  };
  return img;
}

/**
 * Get a list of stats by the given pokemon.
 * @param {Object} statsData
 * @returns An HTMLUListElement with the stats of the pokemon.
 */
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

/**
 * Get a list of games in which the pokemon have appeared in.
 * @param {Object} games
 * @returns An HTMLUListElement with the games that the pokemon have appeared in.
 */
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
