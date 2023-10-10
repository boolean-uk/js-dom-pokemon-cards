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
  img.setAttribute("src", pokemon.sprites.front_default);
  return img;
}

function renderSpecs(pokemon) {
  const ul = document.createElement("ul");
  ul.setAttribute("class", "card--text");
  pokemon.stats.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `${item.stat.name.toUpperCase()}: ${item.base_stat}`;
    ul.append(li);
  });
  return ul;
}

console.log(data[0]);
