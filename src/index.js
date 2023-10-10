console.log(data);
const container = document.querySelector(".cards");

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

data.forEach((pokemon) => {
    const li = document.createElement("li");
    li.setAttribute("class", "card");
    createTitle(pokemon)
    createImage(pokemon)
    renderSpecs(pokemon)
}
);

//You can start simple and just render a single 
//pokemon card from the first element
function createTitle(pokemon) {
const h2 = document.createElement("h2");
h2.setAttribute("class", "card--title");
h2.innerText = capitalize(pokemon.name);
container.append(h2);
}

function createImage (pokemon) {
    const img = document.createElement("img");
    img.setAttribute("class", "card--img");
    img.setAttribute("src", pokemon.sprites.front_default);
    container.append(img);
}

function renderSpecs (pokemon) {
    const ul = document.createElement("ul");
    ul.setAttribute("class", "card--text");
    pokemon.stats.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = `${item.stat.name.toUpperCase()}: ${item.base_stat}`;
        ul.append(li);
    });
    container.append(ul);
}

console.log(data[0]);
