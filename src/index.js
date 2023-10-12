console.log(data);

const pokemonList = document.querySelector(".cards");

data.forEach((pokemon) => {
  // Create a list item for each Pokemon card
  const pokemonCard = document.createElement("li");
  pokemonCard.className = "card";
  pokemonList.appendChild(pokemonCard);

  // Title
  const pokemonTitle = document.createElement('h2');
  pokemonTitle.className = 'card--title';
  pokemonTitle.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  pokemonCard.appendChild(pokemonTitle);

  // Image
  const pokemonImage = document.createElement('img');
  pokemonImage.width = 256;
  pokemonImage.className = 'card--img';
  pokemonImage.src = pokemon.sprites.other["official-artwork"].front_default;

  function toggleImage() {
    if (pokemonImage.src === pokemon.sprites.other["official-artwork"].front_default) {
      pokemonImage.src = pokemon.sprites.other.dream_world.front_default;
    } else {
      pokemonImage.src = pokemon.sprites.other["official-artwork"].front_default;
    }
  }
  pokemonImage.addEventListener('click', toggleImage);
  pokemonCard.appendChild(pokemonImage);

  // Stats
  const pokemonCardTextList = document.createElement("ul");
  pokemonCardTextList.className = "card--text";
  pokemonCard.appendChild(pokemonCardTextList);

  pokemon.stats.forEach((stat) => {
    const statName = stat.stat.name;
    const statNumber = stat.base_stat;
    const pokemonStats = document.createElement("li");
    pokemonStats.textContent = `${statName}: ${statNumber}`.toUpperCase();
    pokemonCardTextList.appendChild(pokemonStats);
  });

  // Game Appearances
  const gameAppearances = document.createElement("details");
  const summary = document.createElement("summary");
  summary.textContent = "Appearances";
  gameAppearances.appendChild(summary);
  pokemonCard.appendChild(gameAppearances);

  const appearanceList = document.createElement("ul");
  appearanceList.style.listStyleType = "none";
  gameAppearances.appendChild(appearanceList);

  pokemon.game_indices.forEach((gameIndex) => {
    const gameName = gameIndex.version.name;
    const capitalName = gameName.charAt(0).toUpperCase() + gameName.slice(1);
    const gameVersion = document.createElement("li");
    gameVersion.textContent = `Name: ${capitalName}`;
    appearanceList.appendChild(gameVersion);
  });
});
