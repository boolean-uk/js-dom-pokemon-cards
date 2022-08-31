
const ALL_POKE_IDS = []
const POKE_LIST = document.querySelector('ul')

generateElements();
addClickEventListenersToImages();

function generateElements() {

  for (const POKEMON of data) {
    const CAPITALIZED_POKE_NAME = capitalizeFirstLetter(POKEMON.name)
    ALL_POKE_IDS.push(`pokeId-${POKEMON.id}`)

    const LIST_ITEM = document.createElement("li");
    LIST_ITEM.setAttribute("class", "card");

    const CARD_TITLE = document.createElement("h2");
    CARD_TITLE.setAttribute("class", "card--title");
    CARD_TITLE.innerText = CAPITALIZED_POKE_NAME

    const CARD_IMAGE = document.createElement("img");
    CARD_IMAGE.setAttribute("class", "card--img");
    CARD_IMAGE.setAttribute("id", `pokeId-${POKEMON.id}`);
    CARD_IMAGE.setAttribute("src", POKEMON.sprites.other['official-artwork'].front_default);

    const INSTRUCTION_LINE = document.createElement("p");
    INSTRUCTION_LINE.innerText = 'Click on image to change view'
    INSTRUCTION_LINE.setAttribute("class", "centered-instructions");

    const POKE_STATS = document.createElement("ul");
    POKE_STATS.setAttribute("class", "card--text");


    let HP_STAT = document.createElement("li");
    HP_STAT.innerText = `HP: ${POKEMON.stats[0].base_stat}`;

    const ATTACK_STAT = document.createElement("li");
    ATTACK_STAT.innerText = `ATTACK: ${POKEMON.stats[1].base_stat}`;

    const DEFENSE_STAT = document.createElement("li");
    DEFENSE_STAT.innerText = `DEFENSE: ${POKEMON.stats[2].base_stat}`;

    const SPECIAL_ATTACK_STAT = document.createElement("li");
    SPECIAL_ATTACK_STAT.innerText = `SPECIAL-ATTACK: ${POKEMON.stats[3].base_stat}`;

    const SPECIAL_DEFENSE_STAT = document.createElement("li");
    SPECIAL_DEFENSE_STAT.innerText = `SPECIAL-DEFENSE: ${POKEMON.stats[4].base_stat}`;

    const SPEED_STAT = document.createElement("li");
    SPEED_STAT.innerText = `SPEED: ${POKEMON.stats[5].base_stat}`;

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

    POKE_STATS.appendChild(HP_STAT);
    POKE_STATS.appendChild(ATTACK_STAT);
    POKE_STATS.appendChild(DEFENSE_STAT);
    POKE_STATS.appendChild(SPECIAL_ATTACK_STAT);
    POKE_STATS.appendChild(SPECIAL_DEFENSE_STAT);
    POKE_STATS.appendChild(SPEED_STAT);

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