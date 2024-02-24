//console.log(data);
//console.log(data[0]);

const statDes = {
  hp: "HP",
  attack: "ATTACK",
  defense: "DEFENSE",
  special_attack: "SPECIAL-ATTACK",
  special_defense: "SPECIAL-DEFENSE",
  speed: "SPEED",
};

const cardContainer = document.querySelector(".cards");

function renderPokemon() {
  data.forEach((pokemon) => {
    // Create a card for each pokemon
    const card = document.createElement("li");
    card.classList.add("card");

    // Create a title for each pokemon
    const title = document.createElement("h2");
    const titleUpperCase =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    title.classList.add("card--title");
    title.textContent = titleUpperCase;

    // Create an image for each pokemon
    const image = document.createElement("img");
    image.classList.add("card--image");
    image.width = 256;
    image.src = pokemon.sprites.other["official-artwork"].front_default;

    //Create stats for each pokemon
    const content = document.createElement("ul");
    content.classList.add("card--text");

    // Iterate over each stat of the pokemon and create list items
    pokemon.stats.forEach((stat) => {
      const statName = stat.stat.name;
      const statValue = stat.base_stat;
      const item = document.createElement("li");
      item.textContent = `${statName.toUpperCase()}: ${statValue}`;
      content.appendChild(item);
    });

    // Add an extra section to each card that contains information about which games each pokemon appeared in.
    pokemon.game_indices.forEach((game) => {
      const versionName = game.version.name;
      const versionNameUpperCase = versionName.charAt(0).toUpperCase() + versionName.slice(1);
      const gameItem = document.createElement("li");
      gameItem.classList.add("game--version");
      gameItem.textContent = `${versionNameUpperCase}`;
      content.appendChild(gameItem);
    });

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(content);
    card.addEventListener('click', () => toggleImage(card, pokemon))
    cardContainer.appendChild(card);
  });
}

function toggleImage(card, pokemon) {
  const image = card.querySelector(".card--image");

  if (image.src === pokemon.sprites.other["official-artwork"].front_default) {
    image.src = pokemon.sprites.other.dream_world.front_default;
  } else {
    image.src = pokemon.sprites.other["official-artwork"].front_default;
  }
}

renderPokemon();
