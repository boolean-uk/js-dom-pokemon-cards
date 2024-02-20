console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);

const createStat = (stat) => {
  return `<li>${stat.stat.name.toUpperCase()}: ${stat.base_stat}</li>`;
};

const createStats = (stats) => {
  var statsList = ``;
  for (let i = 0; i < stats.length; i++) {
    statsList += createStat(stats[i]);
  }
  return statsList;
};

const createGameAppearance = (game) => {
    return `<li>${game.version.name}</li>`
}

const createGameAppearances = (games) => {
    console.log(games)
    let gameList = ``
    for (let i = 0; i < games.length; i++) {
        gameList += createGameAppearance(games[i]);
    }
    return gameList
}

const createPokemon = (pokemon) => {
  const toReturn = `<li class="card">
            <h2 class="card--title">${pokemon.name}</h2>
            <img
                width="256"
                class="card--img"
                src="${pokemon.sprites.front_default}"
            />
            <ul class="card--text">
                ${createStats(pokemon.stats)}
            </ul>
            <h3>Appears in:</h3>
            <ul class="card--text">
                ${createGameAppearances(pokemon.game_indices)}
            </ul
        </li>`;
  return toReturn;
};
const createAllPokemon = (pokemonList) => {
  return pokemonList.map((p) => createPokemon(p));
};

document.getElementsByClassName("cards")[0].innerHTML =
  createAllPokemon(data).join("");
