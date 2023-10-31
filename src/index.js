console.log(data);
const container = document.querySelector(".cards");

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

data.forEach((pokemon) => {
  const listItem = document.createElement("li");
  listItem.setAttribute("class", "card");
  listItem.append(createTitle(pokemon));
  listItem.append(createImage(pokemon));
  listItem.append(renderSpecs(pokemon));
  container.append(listItem)
});

//You can start simple and just render a single
//pokemon card from the first element
function createTitle(pokemon) {
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "card--title");
  h2.innerText = capitalize(pokemon.name);
  return h2;
}

function createImage(pokemon) {
  const img = document.createElement("img");
  img.setAttribute("class", "card--img");
  img.setAttribute("width", "256px")
  img.setAttribute("src", pokemon.sprites.front_default);
  
  let currentImageIndex = 0;

  img.addEventListener("click", function() {
    console.log(Object.values(pokemon.sprites))
    const imgArr = [pokemon.sprites.front_default, pokemon.sprites.back_default, pokemon.sprites.front_shiny, pokemon.sprites.back_shiny]
    currentImageIndex = (currentImageIndex + 1) % imgArr.length;
    img.src = imgArr[currentImageIndex];
  });

  return img;
}

function renderSpecs(pokemon) {
  const ul = document.createElement("ul");
  ul.setAttribute("class", "card--text");
  pokemon.stats.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `${item.stat.name.toUpperCase()}:\t${item.base_stat}`; 
    ul.append(li);
  });
  const li = document.createElement("li");
  li.innerText = `GAMES: ${pokemon.game_indices.length}`
  ul.append(li)
  const gameVersions = compileGameAppearances(pokemon)
  ul.append(gameVersions)
  return ul;
}

function compileGameAppearances(pokemon) {
  const arrVersions = pokemon.game_indices.map(val => capitalize(val.version.name))
  return arrVersions.join(", ")
}

console.log(data[0]);
