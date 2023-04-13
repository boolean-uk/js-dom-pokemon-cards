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
  pokemonName.innerText = data[i].name;

  const pokemonImage = document.createElement("img");
  pokemonImage.setAttribute(
    "src",
    data[i].sprites.other.dream_world.front_default
  );
  pokemonImage.setAttribute("width", 256);
  pokemonImage.classList.add("card--img");
  pokemonElement.append(pokemonName);
  pokemonElement.append(pokemonImage);
  cardList.append(pokemonElement);

  const pokemonStat = document.createElement("ul")
  pokemonStat.classList.add("card--text")
  pokemonElement.append(pokemonStat)
  const pokemonStatList = document.createElement("li")
  pokemonStatList.innerText = data[i].stats[0].stat.name.toUpperCase()
  
  pokemonStat.append(pokemonStatList)

}

// link (line 21)not working for corret image data[i].sprites.other.dream_world["official-artwork"].front_default
