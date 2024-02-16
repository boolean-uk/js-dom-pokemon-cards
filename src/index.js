console.log(data);

//You can start simple and just render a single
//pokemon card from the first element

data.forEach((pokemon) => {
  const card = document.createElement("li");
  const title = document.createElement("h2");
  const img = document.createElement("img");
  const text = document.createElement("ul");
  const games = document.createElement("p");

  card.className = "card";
  title.className = "card--title";
  img.className = "card--img";
  text.className = "card--text";
  games.className = "card--games";

  title.textContent = pokemon.name;

  // Check if the image URL exists in the data
  if (
    pokemon.sprites &&
    pokemon.sprites.other &&
    pokemon.sprites.other["official-artwork"] &&
    pokemon.sprites.other["official-artwork"].front_default
  ) {
    img.src = pokemon.sprites.other["official-artwork"].front_default;
    img.width = "256";
  } else {
    img.alt = "Image not available";
  }

  pokemon.stats.forEach((stat) => {
    const li = document.createElement("li");
    li.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
    text.appendChild(li);
  });

  const gameNames = pokemon.game_indices.map(
    (gameIndex) => gameIndex.version.name
  );
  games.textContent = gameNames.join(", ");

  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(text);
  card.appendChild(games);

  document.querySelector(".cards").appendChild(card);

  let spriteIndex = 0;
  const spriteUrls = Object.values(pokemon.sprites).filter(
    (url) => url !== null
  );
  img.addEventListener("click", () => {
    spriteIndex = (spriteIndex + 1) % spriteUrls.length;
    img.src = spriteUrls[spriteIndex];
  });
});

console.log(data[0]);
