console.log(data);

function reRender() {
  document.body.innerHTML = "";
}

function changeCardImg(pokemon, generation, game) {
  const card = document.getElementById(pokemon.name);
  const img = card.querySelector(".card--img");
  img.src = pokemon.sprites.versions[generation][game].front_default;
}

function createAllCards() {
  const cardList = document.querySelector(".cards");
  data.forEach((pokemon) => {
    cardList.appendChild(createPokemonCard(pokemon));
  });
}

function createPokemonCard(pokemon) {
  const card = document.createElement("li");
  card.classList.add("card");
  card.setAttribute("id", pokemon.name);

  card.appendChild(addTitle(pokemon));
  card.appendChild(addImage(pokemon));
  card.appendChild(addStats(pokemon));
  card.appendChild(addAppersIn(pokemon));

  return card;
}

function addTitle(pokemon) {
  const title = document.createElement("h2");
  title.classList.add("card--title");
  title.textContent = capitalizeFirstLetter(pokemon.name);
  return title;
}

function addImage(pokemon) {
  const image = document.createElement("img");
  image.classList.add("card--img");
  image.width = "256";
  image.src = pokemon.sprites.other["official-artwork"].front_default;
  return image;
}

function addStats(pokemon) {
  const cardText = document.createElement("li");
  cardText.classList.add("card--text");
  pokemon.stats.forEach((statData) => {
    const statType = statData.stat.name.toUpperCase();
    const statValue = statData.base_stat;
    const statLi = document.createElement("li");
    statLi.textContent = `${statType}: ${statValue}`;
    statLi.classList.add("stat--text");
    cardText.appendChild(statLi);
  });
  return cardText;
}

function addAppersIn(pokemon) {
  const appersInInfo = document.createElement("li");
  appersInInfo.classList.add("card--text");

  Object.keys(pokemon.sprites.versions).forEach((gen) => {
    const generation = document.createElement("li");
    generation.textContent = `${gen.toUpperCase()}: `;
    appersInInfo.appendChild(generation);
    Object.keys(pokemon.sprites.versions[gen]).forEach((versionKey) => {
      const version = document.createElement("button");
      version.textContent = `${versionKey}`;
      version.addEventListener("click", () =>
        changeCardImg(pokemon, gen, versionKey)
      );
      generation.appendChild(version);
    });
  });

  return appersInInfo;
}

function capitalizeFirstLetter(string) {
  const firstLetter = string[0].toUpperCase();
  const rest = string.slice(1);
  return firstLetter + rest;
}

function main() {
  createAllCards();
}

main();
console.log(data[0]);
