
const ALL_POKE_IDS = []
const POKE_LIST = document.querySelector('ul')

generateElements();
addClickEventListenersToImages();

function generateElements() {

  for (const POKEMON of data) {

    ALL_POKE_IDS.push(`pokeId-${POKEMON.id}`)

    const LIST_ITEM = document.createElement("li");
    LIST_ITEM.setAttribute("class", "card");

    const CARD_TITLE = document.createElement("h2");
    CARD_TITLE.setAttribute("class", "card--title");
    CARD_TITLE.innerText = capitalizeFirstLetter(POKEMON.name)

    const CARD_IMAGE = document.createElement("img");
    CARD_IMAGE.setAttribute("class", "card--img");
    CARD_IMAGE.setAttribute("id", `pokeId-${POKEMON.id}`);
    CARD_IMAGE.setAttribute("src", POKEMON.sprites.other['official-artwork'].front_default);

    const INSTRUCTION_LINE = document.createElement("p");
    INSTRUCTION_LINE.innerText = 'Click on image to change view'
    INSTRUCTION_LINE.setAttribute("class", "centered-instructions");

    const POKE_STATS = document.createElement("ul");
    POKE_STATS.setAttribute("class", "card--text");

    for (const POKE_STAT of POKEMON.stats) {
      const THIS_LIST_ITEM = document.createElement("li");
      THIS_LIST_ITEM.innerText = `${POKE_STAT.stat.name.toUpperCase()}: ${POKE_STAT.base_stat}`;
      POKE_STATS.appendChild(THIS_LIST_ITEM)
    }

    const GAMES_TITLE = document.createElement("h2");
    GAMES_TITLE.setAttribute("class", "card--title");
    GAMES_TITLE.innerText = "Games";

    const GAMES_GRID = document.createElement("div")
    GAMES_GRID.setAttribute("class", "gamesGrid");

    const ALL_GAMES_FOUND = getGameNames(POKEMON.game_indices);

    for (const GAME of ALL_GAMES_FOUND) {
      GAMES_GRID.appendChild(GAME)
    }

    LIST_ITEM.appendChild(CARD_TITLE);
    LIST_ITEM.appendChild(CARD_IMAGE);
    LIST_ITEM.appendChild(INSTRUCTION_LINE);

    LIST_ITEM.appendChild(POKE_STATS);
    LIST_ITEM.appendChild(GAMES_TITLE);
    LIST_ITEM.appendChild(GAMES_GRID);

    POKE_LIST.appendChild(LIST_ITEM);
  }

}

function addClickEventListenersToImages() {
  for (const POKE_ID of ALL_POKE_IDS) {
    document.getElementById(POKE_ID).addEventListener("click", swapImage)
  }
}

function capitalizeFirstLetter(pokeName) {
  pokeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
  return pokeName
}

function getGameNames(indices) {
  const POKE_GAME_LIST = []

  for (let EACH_GAME_INDEX of indices) {
    const GAME_ITEM = document.createElement("div");
    GAME_ITEM.setAttribute("class", "pokeGameName");
    GAME_ITEM.innerText = capitalizeFirstLetter(EACH_GAME_INDEX.version.name)
    POKE_GAME_LIST.push(GAME_ITEM)
  }

  return POKE_GAME_LIST
}

function swapImage() {
  let newImageSource = this.src
  let fileExtension = newImageSource.substr(newImageSource.length - 3)

  if (fileExtension === 'png') {
    newImageSource = newImageSource.replaceAll('.png', '.svg')
    newImageSource = newImageSource.replaceAll('official-artwork', 'dream-world')
    this.src = newImageSource
  }

  if (fileExtension === 'svg') {
    newImageSource = newImageSource.replaceAll('.svg', '.png')
    newImageSource = newImageSource.replaceAll('dream-world', 'official-artwork')
    this.src = newImageSource
  }
}