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
  return `<li>${game.version.name}</li>`;
};

const createGameAppearances = (games) => {
  let gameList = ``;
  for (let i = 0; i < games.length; i++) {
    gameList += createGameAppearance(games[i]);
  }
  return gameList;
};

const createPokemon = (pokemon) => {
  const toReturn = `<li class="card" pokemon-id="${pokemon.name}">
            <h2 class="card--title">${pokemon.name}</h2>
            <img
                width="256"
                class="card--img"
                src="${pokemon.sprites.front_default}"
            />
            <button class="swap-button">Swap image</button>
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

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const button = card.querySelector(".swap-button");
  button.addEventListener("click", () => {
    const pokemonId = card.getAttribute("pokemon-id");
    console.log(pokemonId)
    let pokemonData
    data.forEach((pokemon) => {
        if (pokemon.name === pokemonId) pokemonData = pokemon
    })
    console.log(pokemonData)
    const image = card.querySelector(".card--img");
    if (image) {
      console.log("click");
      //image.src = "https://i.kym-cdn.com/entries/icons/original/000/047/683/cheeseburger_wah.jpg";
      image.src = pokemonData.sprites.front_shiny;
    }
  });
});
