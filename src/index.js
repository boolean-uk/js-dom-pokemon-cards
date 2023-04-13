console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);

const cardList = document.querySelector(".cards");
console.log(cardList);

for (let i = 0; i < data.length; i++) {
  const pokemonElement = document.createElement("li");
  pokemonElement.classList.add("card");

  const pokemonName = document.createElement("h2");
  pokemonName.classList.add("card--title");

  pokemonName.innerText =
    data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1);

  const pokemonImage = document.createElement("img");
  pokemonImage.setAttribute(
    "src",
    data[i].sprites.other["official-artwork"].front_default
  );
  pokemonImage.setAttribute("width", 256);
  pokemonImage.classList.add("card--img");
  pokemonElement.append(pokemonName);
  pokemonElement.append(pokemonImage);
  cardList.append(pokemonElement);

  const pokemonStat = document.createElement("ul");
  pokemonStat.classList.add("card--text");
  pokemonElement.append(pokemonStat);

  for (let j = 0; j <= 5; j++) {
    const pokemonStatList = document.createElement("li");
    const stat_name = data[i].stats[j].stat.name.toUpperCase();
    const stat_value = data[i].stats[j].base_stat;
    pokemonStatList.innerText = stat_name + ": " + stat_value;
    pokemonStat.append(pokemonStatList);
    pokemonStatList.style.padding = "5px";
  }
  pokemonStat.style.listStyle = "none";
  pokemonElement.style.listStyle = "none";
}
