const GENERATIONS = [
  "generation-i",
  "generation-ii",
  "generation-iii",
  "generation-iv",
  "generation-v",
  "generation-vi",
  "generation-vii",
  "generation-viii"
]

const ALL_GAMES = {
  'red-blue': 'Red and Blue',
  'yellow': 'Yellow',
  'crystal': 'Crystal',
  'gold': 'Gold',
  'silver': 'Silver',
  'emerald': 'Emerald',
  'firered-leafgreen': 'Fire Red and Leaf Green',
  'ruby-sapphire': 'Ruby and Sapphire',
  'diamond-pearl': 'Diamond and Pearl',
  'heartgold-soulsilver': 'Heart Gold and Soul Silver',
  'platinum': 'Platinum',
  'black-white': 'Black and White',
  'omegaruby-alphasapphire': 'Omega Ruby and Alpha Sapphire',
  'x-y': 'X and Y',
  'icons': 'Icons',
  'ultra-sun-ultra-moon': 'Ultra Sun and Ultra Moon',
}

const POKE_LIST = document.querySelector('ul')

for (let pokeMon of data) {
  const LIST_ITEM = document.createElement("li");
  LIST_ITEM.setAttribute("class", "card");

  const POKE_NAME = capitalizeFirstLetter(pokeMon.name)

  const THIS_POKEMON_CARD = `
      <h2 class="card--title">${POKE_NAME}</h2>
      <img
        width="256"
        class="card--img"
        src="${pokeMon.sprites.other['official-artwork'].front_default}"
      />
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
      <div class="gamesGrid">${getGameNames(pokeMon.sprites.versions)}</div>
  `

  LIST_ITEM.innerHTML = THIS_POKEMON_CARD
  POKE_LIST.appendChild(LIST_ITEM);
}

function capitalizeFirstLetter(pokeName) {
  pokeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
  return pokeName
}

function separatePokeGames(pokeGames) {
  return pokeGames.toString()
}

function getGameNames(versions) {

  const POKE_VERSIONS = [] 
  let pokeGames = []
  let pokeGameList = ''

  for (let generation of GENERATIONS) {
    POKE_VERSIONS.push(versions[generation])
  }

  for (let eachPokeVersion of POKE_VERSIONS) {
    const gamesFromThisPokeVersion = Object.keys(eachPokeVersion);
    pokeGames = pokeGames.concat(gamesFromThisPokeVersion)
  }

  for (let eachPokeGame of pokeGames) {
    pokeGameList += `<div class="pokeGameName">${eachPokeGame}</div>`
  }

  return pokeGameList
}

