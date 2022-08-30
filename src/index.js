let allPokeIDs = []
const POKE_LIST = document.querySelector('ul')

for (let pokeMon of data) {
  const LIST_ITEM = document.createElement("li");
  LIST_ITEM.setAttribute("class", "card");

  const POKE_NAME = capitalizeFirstLetter(pokeMon.name)
  allPokeIDs.push(`pokeId-${pokeMon.id}`)

  const THIS_POKEMON_CARD = `
      <h2 class="card--title">${POKE_NAME}</h2>
      <img
        width="256"
        class="card--img"
        src="${pokeMon.sprites.other['official-artwork'].front_default}"
        id="pokeId-${pokeMon.id}"
      />
      <p align="center">Click on image to change view</p>
      <ul class="card--text">
        <li><strong>HP:</strong> <span class="stat-value-indented">${pokeMon.stats[0].base_stat}</span></li>
        <li><strong>ATTACK:</strong> <span class="stat-value-indented">${pokeMon.stats[1].base_stat}</span></li>
        <li><strong>DEFENSE:</strong> <span class="stat-value-indented">${pokeMon.stats[2].base_stat}</span></li>
        <li><strong>SPECIAL-ATTACK:</strong> <span class="stat-value-indented">${pokeMon.stats[3].base_stat}</span></li>
        <li><strong>SPECIAL-DEFENSE:</strong> <span class="stat-value-indented">${pokeMon.stats[4].base_stat}</span></li>
        <li><strong>SPEED:</strong> <span class="stat-value-indented">${pokeMon.stats[5].base_stat}</span></li>
      </ul>
      <hr>
      <h2 class="card--title">Games</h2>
      <div class="gamesGrid">${getGameNames(pokeMon.game_indices)}</div>
  `

  LIST_ITEM.innerHTML = THIS_POKEMON_CARD
  POKE_LIST.appendChild(LIST_ITEM);
}

function capitalizeFirstLetter(pokeName) {
  pokeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
  return pokeName
}

function getGameNames(indices) {
  let pokeGameList = ''

  for (let eachIndex of indices) {
    pokeGameList += `<div class="pokeGameName">${capitalizeFirstLetter(eachIndex.version.name)}</div>`
  }

  return pokeGameList
}

for (let pokeID of allPokeIDs) {
  document.getElementById(pokeID).addEventListener("click", testFunction)
}

function testFunction() {
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
